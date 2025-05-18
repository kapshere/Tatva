import express from 'express';
const router = express.Router();

// Mock BECKN data flow demonstration
router.get('/demo', (req, res) => {
  res.json({
    message: 'This simulates a decentralized BAP/BPP data flow. In production, this would use BECKN protocol to interact between Tatva and other network participants.'
  });
});

export default router;
