import { MongoClient, Db } from 'mongodb';

let db: Db;

export async function connectDatabase() {
  if (db) {
    return db;
  }

  const client = new MongoClient(process.env.DATABASE_URL);

  try {
    await client.connect();
    db = client.db();
    console.log('Connected to the MongoDB database');
    return db;
  } catch (error) {
    console.error('Error connecting to the MongoDB database:', error);
    throw error;
  }
}

export function getDatabase() {
  if (!db) {
    throw new Error('Database not connected');
  }
  return db;
}
