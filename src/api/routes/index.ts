import { Router } from 'express';
import { locationRouter } from './location.route';

const router = Router();

router.use('/location', locationRouter);

export default router;
