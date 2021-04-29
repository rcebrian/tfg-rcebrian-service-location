import { body } from 'express-validator';

/**
 * Validate if the body params are valid
 * @returns array of validations
 */
export const geoPointValidation = () => [
  body('location.latitude').notEmpty().withMessage('Latitude is required').isNumeric()
    .withMessage('Username must be valid email'),
  body('location.longitude').notEmpty().withMessage('Longitude is required').isNumeric()
    .withMessage('Password is required'),
  body('timestamp').notEmpty().withMessage('Timestamp is required'),
];
