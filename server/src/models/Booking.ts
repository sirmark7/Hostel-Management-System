import mongoose, { Document, Schema } from 'mongoose';

interface IBooking extends Document {
  user: Schema.Types.ObjectId,
  room: Schema.Types.ObjectId;
  bookingDate: Date;
  status: 'booked' | 'cancelled';
}

const BookingSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  room: { type: Schema.Types.ObjectId, ref: 'Room', required: true },
  bookingDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['booked', 'cancelled'], default: 'booked' },
});

const Booking = mongoose.model<IBooking>('Booking', BookingSchema);
export default Booking;
