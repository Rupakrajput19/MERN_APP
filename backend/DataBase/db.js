const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);


const dbName = 'mydatabase';

async function MyDB() {
    
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');

  return 'done.';
}

MyDB()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());