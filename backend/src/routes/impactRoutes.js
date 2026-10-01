import { Router } from 'express';
import { ImpactController } from '../controllers/impactController.js';

const router = Router();

router.get('/metrics', ImpactController.getMetrics);
router.get('/report', ImpactController.getDetailedReport);
router.get('/activity', ImpactController.getLiveActivity);
router.get('/notifications', ImpactController.getNotifications);

export default router;
