import express from 'express';
import {getUserProfile, updateUserProfile, deleteUserAccount } from '../controllers/userController';
import {login,register} from '../controllers/authController'
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', authMiddleware, getUserProfile);
router.put('/profile', authMiddleware, updateUserProfile);
router.delete('/profile', authMiddleware, deleteUserAccount);

export default router;
