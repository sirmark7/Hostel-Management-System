import express from 'express';
import { authMiddleware, adminMiddleware } from '../middlewares/authMiddleware';
import { createRoom, updateRoom, deleteRoom, getRooms, getRoomById } from '../controllers/roomController';
import upload from '../middlewares/uploadMiddleware';  // Multer middleware

const router = express.Router();

router.route('/')
  .get(getRooms)  // Public route
  .post(authMiddleware, adminMiddleware, upload.array('images', 5), createRoom);  // Admin route with image upload

router.route('/:id')
  .get(getRoomById)  // Public route to get a specific room
  .put(authMiddleware, adminMiddleware, upload.array('images', 5), updateRoom)  // Admin route with image upload
  .delete(authMiddleware, adminMiddleware, deleteRoom);  // Admin route

export default router;
