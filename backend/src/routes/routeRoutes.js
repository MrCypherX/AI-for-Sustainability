import { Router } from 'express';
import { RouteController } from '../controllers/routeController.js';

const router = Router();

router.get('/active', RouteController.getActiveRoute);
router.post('/step', RouteController.updateRouteStep);

export default router;
