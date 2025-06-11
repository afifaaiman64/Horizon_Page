const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function insertWeeklyRevenue() {
  await client.connect();
  const db = client.db('mybarchart');
  const revenue = db.collection('revenue');

  const base = new Date("2025-04-01");
  const sample = [];
  
  for (let i = 0; i < 4; i++) {
    const d = new Date(base);
    d.setDate(base.getDate() + (i * 7)); // one entry per week
    sample.push({ date: d, amount: 100 * (i + 1) }); // $100, $200...
  }
  
  await db.collection('revenue').insertMany(sample);
  console.log("Weekly dummy revenue inserted.");
  await client.close();
}

insertWeeklyRevenue();

