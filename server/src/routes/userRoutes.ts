import express from 'express';
import {getUserProfile, updateUserProfile, deleteUserAccount, getAllUseProfiles, deleteUser } from '../controllers/userController';
import {login,register} from '../controllers/authController'
import { adminMiddleware, authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', authMiddleware, getUserProfile);
router.get('/all/profile', authMiddleware, getAllUseProfiles);
router.put('/profile', authMiddleware, updateUserProfile);
router.put('/profile/:userId', authMiddleware, adminMiddleware,updateUserProfile);
router.delete('/profile', authMiddleware, deleteUserAccount);
router.delete('/profile/:userId', authMiddleware,adminMiddleware, deleteUser);

export default router;
