import { Router } from 'express';
import { registerLocation } from '../controllers/location.controller';

const router = Router();

router.route('/').post(registerLocation);

export { router as locationRouter };
