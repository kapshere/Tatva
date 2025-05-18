import express from 'express';
import { getDb } from '../db.js';
import { authenticateToken } from '../middleware/auth.js';
const router = express.Router();

// Update profile (protected)
router.post('/profile', authenticateToken, async (req, res) => {
  const { name, skills, education, experience } = req.body;
  const userId = req.user.id;
  try {
    const db = await getDb();
    await db.run(`INSERT INTO profiles (user_id, name, skills, education, experience)
      VALUES (?, ?, ?, ?, ?)
      ON CONFLICT(user_id) DO UPDATE SET name=?, skills=?, education=?, experience=?`,
      userId, name, skills, education, experience, name, skills, education, experience);
    res.json({ profile: { name, skills, education, experience } });
  } catch {
    res.status(500).json({ error: 'Profile save failed' });
  }
});

// Get all users (for search/browse)
router.get('/', authenticateToken, async (req, res) => {
  try {
    const db = await getDb();
    const users = await db.all(`SELECT users.id, users.email, profiles.name, profiles.skills, profiles.education, profiles.experience
      FROM users LEFT JOIN profiles ON users.id = profiles.user_id`);
    const userProfiles = users.map(u => ({
      id: u.id,
      email: u.email,
      profile: {
        name: u.name || '',
        skills: u.skills || '',
        education: u.education || '',
        experience: u.experience || ''
      }
    }));
    res.json(userProfiles);
  } catch {
    res.status(500).json({ error: 'Could not fetch users' });
  }
});

// Get profile by ID
router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const db = await getDb();
    const user = await db.get(`SELECT users.id, users.email, profiles.name, profiles.skills, profiles.education, profiles.experience
      FROM users LEFT JOIN profiles ON users.id = profiles.user_id WHERE users.id = ?`, req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({
      id: user.id,
      email: user.email,
      profile: {
        name: user.name || '',
        skills: user.skills || '',
        education: user.education || '',
        experience: user.experience || ''
      }
    });
  } catch {
    res.status(500).json({ error: 'Could not fetch profile' });
  }
});

export default router;
