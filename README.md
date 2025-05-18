# Tatva Prototype v1

This is the prototype (v1) for Tatva, a decentralized professional network for education/skilling, built for ONEST/BECKN.

## Features
- Email-based registration/login
- User profile creation/editing
- Search/browse users
- Connection requests (send/accept/reject)
- Mocked decentralized (BAP/BPP) data flow

## Structure
- `backend/` – Node.js/Express API (in-memory data)
- `frontend/` – React UI

## Running the Prototype
1. Install backend dependencies: `cd backend && npm install && npm start`
2. In a new terminal, install frontend dependencies: `cd frontend && npm install && npm start`
3. Access the app at `http://localhost:3000` (default)

No persistent data; this is for demo purposes only.
