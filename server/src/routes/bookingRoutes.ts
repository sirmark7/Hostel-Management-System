import express from 'express';
import { createBooking, getUserBookings, getAllBookings, updateBookingStatus, deleteBooking } from '../controllers/bookingController';
import { authMiddleware, adminMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/', authMiddleware, createBooking);
router.get('/', authMiddleware, getUserBookings);
router.get('/admin', authMiddleware, adminMiddleware, getAllBookings);
router.put('/:id/status', authMiddleware, adminMiddleware, updateBookingStatus);
router.delete('/:id', authMiddleware, adminMiddleware, deleteBooking);

export default router;
