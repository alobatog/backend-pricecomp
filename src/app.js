import express, { json } from 'express';
import morgan from 'morgan';

// Import routes 
import gamesRoutes from './routes/games';

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(json());

// Routes 
app.use('/games', gamesRoutes);

export default app;