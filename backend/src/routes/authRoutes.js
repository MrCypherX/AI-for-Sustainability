import { Router } from 'express';
import { AuthController } from '../controllers/authController.js';

const router = Router();

router.get('/user', AuthController.getCurrentUser);
router.post('/switch-role', AuthController.switchRole);
router.get('/users', AuthController.getAllUsers);

export default router;
