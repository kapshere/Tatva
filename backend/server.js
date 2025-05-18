import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { v4 as uuidv4 } from 'uuid';
import authRoutes from './routes/auth.js';
import usersRoutes from './routes/users.js';
import connectionsRoutes from './routes/connections.js';
import mockBecknRoutes from './routes/mockBeckn.js';
import demoRoutes from './routes/demo.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/connections', connectionsRoutes);
app.use('/api/mockbeckn', mockBecknRoutes);
app.use('/api/demo', demoRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Tatva backend running on port ${PORT}`);
});
