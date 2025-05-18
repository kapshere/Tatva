import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';
import { getDb } from '../db.js';
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'tatva_secret';

// Register
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const db = await getDb();
    const existing = await db.get('SELECT * FROM users WHERE email = ?', email);
    if (existing) {
      return res.status(400).json({ error: 'Email already registered' });
    }
    const id = uuidv4();
    await db.run('INSERT INTO users (id, email, password) VALUES (?, ?, ?)', id, email, password);
    const token = jwt.sign({ id, email }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ id, email, token });
  } catch (err) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const db = await getDb();
    const user = await db.get('SELECT * FROM users WHERE email = ? AND password = ?', email, password);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ id: user.id, email: user.email, token });
  } catch (err) {
    res.status(500).json({ error: 'Login failed' });
  }
});

export default router;
