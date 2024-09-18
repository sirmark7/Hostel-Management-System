import express from 'express';
import { createBooking, getUserBookings, getAllBookings, updateBookingStatus, deleteBooking, createUserBooking, updateBooking } from '../controllers/bookingController';
import { authMiddleware, adminMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/', authMiddleware, createBooking);
router.post('/user', authMiddleware,adminMiddleware, createUserBooking);
router.get('/', authMiddleware, getUserBookings);
router.get('/admin', authMiddleware, adminMiddleware, getAllBookings);
router.put('/:id', authMiddleware, adminMiddleware, updateBooking);
router.put('/status/:id', authMiddleware, updateBookingStatus);
router.delete('/:id', authMiddleware, adminMiddleware, deleteBooking);

export default router;
