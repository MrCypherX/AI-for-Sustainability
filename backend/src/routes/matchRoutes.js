import { Router } from 'express';
import { MatchController } from '../controllers/matchController.js';

const router = Router();

router.get('/', MatchController.getMatches);
router.post('/accept', MatchController.acceptMatch);

export default router;
