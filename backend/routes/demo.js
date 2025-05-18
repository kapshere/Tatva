import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { getDb } from '../db.js';
const router = express.Router();

// Populate demo/sample data for prototype
router.post('/populate', async (req, res) => {
  try {
    const db = await getDb();
    // Sample users
    const users = [
      { id: uuidv4(), email: 'alice@example.com', password: 'alice123' },
      { id: uuidv4(), email: 'bob@example.com', password: 'bob123' },
      { id: uuidv4(), email: 'carol@example.com', password: 'carol123' }
    ];
    for (const u of users) {
      await db.run('INSERT OR IGNORE INTO users (id, email, password) VALUES (?, ?, ?)', u.id, u.email, u.password);
    }
    // Sample profiles
    const profiles = [
      { user_id: users[0].id, name: 'Alice', skills: 'React,Node', education: 'BSc CS', experience: 'Acme Corp' },
      { user_id: users[1].id, name: 'Bob', skills: 'Python,ML', education: 'MSc AI', experience: 'DataX' },
      { user_id: users[2].id, name: 'Carol', skills: 'UI/UX,Design', education: 'BA Design', experience: 'StudioY' }
    ];
    for (const p of profiles) {
      await db.run('INSERT OR IGNORE INTO profiles (user_id, name, skills, education, experience) VALUES (?, ?, ?, ?, ?)', p.user_id, p.name, p.skills, p.education, p.experience);
    }
    // Sample connections
    await db.run('INSERT OR IGNORE INTO connections (id, from_user, to_user, status) VALUES (?, ?, ?, ?)', uuidv4(), users[0].id, users[1].id, 'accepted');
    await db.run('INSERT OR IGNORE INTO connections (id, from_user, to_user, status) VALUES (?, ?, ?, ?)', uuidv4(), users[1].id, users[2].id, 'pending');
    res.json({ message: 'Demo data populated.' });
  } catch (err) {
    res.status(500).json({ error: 'Demo data population failed' });
  }
});

export default router;
