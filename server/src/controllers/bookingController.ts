import { Request, Response } from 'express';
import Booking from '../models/Booking';
import Room from '../models/Room';

interface roomTypes{
  name: string;
  price: number;
  oldPrice: number;
  hostel: string;
  location: string;
  slot: number;
  occupancy: number;
  stars: number[];
  category: string;
  description: string;
  facilities: string[];
  images: string[];
}



// Create a Booking
export const createBooking = async (req: Request|any, res: Response) => {
  const { roomId,slot} = req.body;
  const userId = req.user.userId;
  console.log(roomId,slot,userId);
  

  try {
    const room: any = await Room.findById(roomId);

    if (!room) {
      return res.status(404).json({statusCode:400, message: 'Room not found' });
    }

    if (!room.available) {
      return res.status(400).json({statusCode:400, message: 'Room is not available for booking' });
    }

    // Create new booking
    const newBooking = new Booking({
      user: userId,
      room: roomId,
      status: 'booked',
    });
  const updates={
    slot:(room.occupancy-slot)
  }
    await newBooking.save();
    const updatedRoom = await Room.findByIdAndUpdate(room._id, updates, { new: true });
      if (!updatedRoom) return res.status(404).json({statusCode:404, message: 'Room not found' });
    // res.status(200).json({statusCode:200,data:updatedRoom});
    

    // Update room availability
    if(updatedRoom.slot <= 0){
    room.available = false;
    await room.save();
    }

    res.status(201).json({statusCode:201,data:newBooking});
  } catch (error:any) {
    res.status(500).json({statusCode:500, error: error.message });
  }
};

// Get All Bookings for a User
export const getUserBookings = async (req: Request|any, res: Response) => {
  const userId = req.user.userId;

  try {
    const bookings = await Booking.find({ user: userId }).populate('room');
    res.status(200).json({ statusCode:200,data:bookings});
  } catch (error:any) {
    res.status(500).json({ statusCode:200,error: error.message });
  }
};

// Admin: Get All Bookings
export const getAllBookings = async (req: Request|any, res: Response) => {
  try {
    const bookings = await Booking.find().populate('user room');
    res.status(200).json({statusCode:200,data:bookings});
  } catch (error:any) {
    res.status(500).json({ statusCode:500, error: error.message });
  }
};

// Admin: Update Booking Status
export const updateBookingStatus = async (req: Request|any, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const booking = await Booking.findById(id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    booking.status = status;
    await booking.save();

    if (status === 'cancelled') {
      const room:any = await Room.findById(booking.room);
      if (room) {
        room.available = true;
        await room.save();
      }
    }

    res.status(200).json({statusCode:200,data:booking});
  } catch (error:any) {
    res.status(500).json({statusCode:500, error: error.message });
  }
};

// Delete a Booking
export const deleteBooking = async (req: Request|any, res: Response) => {
  const { id } = req.params;

  try {
    const booking = await Booking.findByIdAndDelete(id);
    if (!booking) {
      return res.status(404).json({statusCode:404, message: 'Booking not found' });
    }

    const room:any = await Room.findById(booking.room);
    if (room) {
      room.available = true;
      await room.save();
    }

    res.status(200).json({statusCode:200, message: 'Booking deleted successfully',data:room });
  } catch (error:any) {
    res.status(500).json({ statusCode:500, error: error.message });
  }
};
