import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { getDb } from '../db.js';
import { authenticateToken } from '../middleware/auth.js';
const router = express.Router();

// Send connection request (protected)
router.post('/request', authenticateToken, async (req, res) => {
  const from = req.user.id;
  const { to } = req.body;
  try {
    const db = await getDb();
    const existing = await db.get('SELECT * FROM connections WHERE from_user = ? AND to_user = ?', from, to);
    if (existing) {
      return res.status(400).json({ error: 'Request already sent' });
    }
    const id = uuidv4();
    await db.run('INSERT INTO connections (id, from_user, to_user, status) VALUES (?, ?, ?, ?)', id, from, to, 'pending');
    res.json({ status: 'pending' });
  } catch {
    res.status(500).json({ error: 'Could not send request' });
  }
});

// Accept/reject connection (protected)
router.post('/respond', authenticateToken, async (req, res) => {
  const { id, action } = req.body; // action: 'accept' or 'reject'
  try {
    const db = await getDb();
    const conn = await db.get('SELECT * FROM connections WHERE id = ?', id);
    if (!conn) return res.status(404).json({ error: 'Request not found' });
    await db.run('UPDATE connections SET status = ? WHERE id = ?', action === 'accept' ? 'accepted' : 'rejected', id);
    res.json({ status: action === 'accept' ? 'accepted' : 'rejected' });
  } catch {
    res.status(500).json({ error: 'Could not update request' });
  }
});

// Get connection requests for the authenticated user (protected)
router.get('/requests', authenticateToken, async (req, res) => {
  const userId = req.user.id;
  try {
    const db = await getDb();
    const incoming = await db.all('SELECT * FROM connections WHERE to_user = ? AND status = ?', userId, 'pending');
    const outgoing = await db.all('SELECT * FROM connections WHERE from_user = ? AND status = ?', userId, 'pending');
    res.json({ incoming, outgoing });
  } catch {
    res.status(500).json({ error: 'Could not fetch requests' });
  }
});

// Get accepted connections for the authenticated user (protected)
router.get('/', authenticateToken, async (req, res) => {
  const userId = req.user.id;
  try {
    const db = await getDb();
    const accepted = await db.all('SELECT * FROM connections WHERE (from_user = ? OR to_user = ?) AND status = ?', userId, userId, 'accepted');
    res.json({ connections: accepted });
  } catch {
    res.status(500).json({ error: 'Could not fetch connections' });
  }
});

export default router;
