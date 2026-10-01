import { Router } from 'express';
import authRoutes from './authRoutes.js';
import predictionRoutes from './predictionRoutes.js';
import surplusRoutes from './surplusRoutes.js';
import matchRoutes from './matchRoutes.js';
import routeRoutes from './routeRoutes.js';
import impactRoutes from './impactRoutes.js';

const apiRouter = Router();

apiRouter.get('/health', (req, res) => {
  res.json({
    status: 'online',
    app: 'NourishLoop Full-Stack API',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

apiRouter.use('/auth', authRoutes);
apiRouter.use('/predictions', predictionRoutes);
apiRouter.use('/surplus', surplusRoutes);
apiRouter.use('/matches', matchRoutes);
apiRouter.use('/routes', routeRoutes);
apiRouter.use('/impact', impactRoutes);

export default apiRouter;
