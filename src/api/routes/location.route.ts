import { Router } from 'express';
import { validatorHandler, roleUserOrMonitor } from '@rcebrian/tfg-rcebrian-common';
import { registerLocation } from '../controllers/location.controller';
import { geoPointValidation } from '../validations';

const router = Router();

router.route('/').post(roleUserOrMonitor, geoPointValidation(), validatorHandler, registerLocation);

export { router as locationRouter };
