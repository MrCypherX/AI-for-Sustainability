import { Router } from 'express';
import { PredictionController } from '../controllers/predictionController.js';

const router = Router();

router.get('/current', PredictionController.getPrediction);
router.post('/simulate', PredictionController.runSimulation);
router.post('/apply', PredictionController.applyRecommendation);

export default router;
