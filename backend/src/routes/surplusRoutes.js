import { Router } from 'express';
import { SurplusController } from '../controllers/surplusController.js';

const router = Router();

router.get('/', SurplusController.getListings);
router.post('/', SurplusController.createListing);
router.get('/:id', SurplusController.getListingById);
router.patch('/:id', SurplusController.updateListingStatus);

export default router;
