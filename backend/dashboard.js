const express = require('express');
const router = express.Router();
const connectToDB = require('./db'); // the file above

router.get('/dashboard', async (req, res) => {
  try {
    const db = await connectToDB();
    const result = await db.collection('revenue').aggregate([
        {
          $group: {
            _id: {
              year: { $year: "$date" },
              week: { $isoWeek: "$date" }  // ISO week number
            },
            totalRevenue: { $sum: "$amount" }
          }
        },
        { $sort: { "_id.year": 1, "_id.week": 1 } }
      ]).toArray();
      
      console.log(result);
      
    res.json(result);
  } catch (err) {
    console.error('Aggregation error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
