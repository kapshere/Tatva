import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

let dbPromise;
export async function getDb() {
  if (!dbPromise) {
    dbPromise = open({
      filename: './tatva.db',
      driver: sqlite3.Database,
    });
    const db = await dbPromise;
    // Users table
    await db.run(`CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE,
      password TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
    // Profiles table
    await db.run(`CREATE TABLE IF NOT EXISTS profiles (
      user_id TEXT PRIMARY KEY,
      name TEXT,
      skills TEXT,
      education TEXT,
      experience TEXT,
      FOREIGN KEY(user_id) REFERENCES users(id)
    )`);
    // Connections table
    await db.run(`CREATE TABLE IF NOT EXISTS connections (
      id TEXT PRIMARY KEY,
      from_user TEXT,
      to_user TEXT,
      status TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
  }
  return dbPromise;
}
