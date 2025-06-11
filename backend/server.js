const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const dashboardRoutes = require('./dashboard');


const app = express();
const PORT = 5000;
const uri = 'mongodb://localhost:27017'; 
const client = new MongoClient(uri);

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use('/dashboard', dashboardRoutes);

// Connect to DB
async function getDB() {
  if (!client.topology?.isConnected()) {
    await client.connect();
  }
  return client.db('mybarchart');
}
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

passport.use(new GoogleStrategy({
  clientID: 'YOUR_GOOGLE_CLIENT_ID', // Replace with your Google client ID
  clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET', // Replace with your Google client secret
  callbackURL: 'http://localhost:5000/auth/google/callback', // Redirect URI (should match in Google Developer Console)
}, (token, tokenSecret, profile, done) => {
  // Here, save user data to database if necessary
  // For simplicity, we are storing it in the session
  return done(null, profile);
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.use(passport.initialize());
app.use(passport.session());

// Route to start OAuth flow
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Google callback route
app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication
    res.redirect('/dashboard');
  }
);

app.get('/api/weekly-revenue', async (req, res) => {
  try {
    const db = await getDB();
    const result = await db.collection('revenue').aggregate([
      {
        $group: {
          _id: {
            year: { $year: "$date" },
            week: { $isoWeek: "$date" }
          },
          totalRevenue: { $sum: "$amount" }
        }
      },
      { $sort: { "_id.year": 1, "_id.week": 1 } }
    ]).toArray();

    res.json(result);
  } catch (err) {
    console.error('Error fetching weekly revenue:', err);
    res.status(500).json({ error: 'Failed to fetch weekly revenue' });
  }
});

//for pie chart mock data
app.get('/api/storage', (req, res) => {
  const mockpieData = {
    system: 30 * 1024,  // in MB
    user: 50 * 1024,    // in MB
    free: 20 * 1024     // in MB
  };
  res.json(mockpieData);
});

// Dashboard route (protected)
app.get('/dashboard', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect('/login');
  } e
  res.send(`Hello, ${req.user.displayName}`);
});

// Login route
app.get('/login', (req, res) => {
  res.send('<a href="/auth/google">Sign in with Google</a>');
});

// Dummy user for login test
const dummyUser = {
  email: 'afifa@gmail.com',
  password: 'hi1234',
  rememberMe: true
};

const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your_secret_key';

app.post('/login', async (req, res) => {
  const { email, password, rememberMe } = req.body;

  if (email === dummyUser.email && password === dummyUser.password) {
    // 👇 Token expires in 30 days if "rememberMe" is checked, otherwise 1 hour
    const token = jwt.sign(
      { email }, // payload
      SECRET_KEY,
      { expiresIn: rememberMe ? '30d' : '1h' }
    );

    res.json({
      success: true,
      message: 'Login successful',
      token
    });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }

});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


