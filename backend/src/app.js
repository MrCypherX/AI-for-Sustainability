import express from 'express';
import cors from 'cors';
import { config } from './config/config.js';
import apiRouter from './routes/index.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

// Middlewares
app.use(cors({ origin: config.corsOrigin }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logger for development
if (config.nodeEnv !== 'test') {
  app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);
    next();
  });
}

// Mount Central API Router
app.use('/api', apiRouter);

// 404 Handler for undefined API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({ success: false, error: 'Endpoint not found' });
});

// Global Error Handler
app.use(errorHandler);

export default app;
