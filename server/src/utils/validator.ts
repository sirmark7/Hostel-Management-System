import { body } from 'express-validator';

export const validateRoom = [
  body('name').notEmpty().withMessage('Name is required'),
  body('price').isNumeric().withMessage('Price must be a number'),
];
