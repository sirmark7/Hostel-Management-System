import { Request, Response } from 'express';
import Room from '../models/Room';



// Create a new room
export const createRoom = async (req: Request, res: Response) => {
  const { name, price, oldPrice, hostel, location, slot, occupancy, stars, category, description, facilities } = req.body;

  const images = req.files ? (req.files as Express.Multer.File[]).map(file => file.filename) : [];

  try {
    const newRoom = new Room({
      name,
      price,
      oldPrice,
      hostel,
      location,
      slot,
      occupancy,
      stars,
      category,
      description,
      facilities,
      images,  // Array of image filenames
    });

    await newRoom.save();
    res.status(201).json({statusCode:201,data:newRoom});
  } catch (error:any) {
    res.status(500).json({statusCode:500, error: error.message });
  }
};

export const updateRoom = async (req: Request, res: Response) => {
  const { id } = req.params;
  // console.log(req.params);
  
  const updates = req.body;

  const images = req.files ? (req.files as Express.Multer.File[]).map(file => file.filename) : undefined;
  if (images) {
    updates.images = images;  // Update images if new images are uploaded
  }

  try {
    const updatedRoom = await Room.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedRoom) return res.status(404).json({statusCode:404, message: 'Room not found' });
    res.status(200).json({statusCode:200,data:updatedRoom});
  } catch (error:any) {
    res.status(500).json({statusCode:500, error: error.message });
  }
};
// Delete a room
export const deleteRoom = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedRoom = await Room.findByIdAndDelete(id);
    if (!deletedRoom) return res.status(404).json({ message: 'Room not found' });
    res.status(200).json({statusCode:200, message: 'Room deleted',data:deleteRoom });
  } catch (error:any) {
    res.status(500).json({ statusCode:500,error: error.message });
  }
};

// Get all rooms
export const getRooms = async (req: Request, res: Response) => {
  try {
    const rooms = await Room.find();
    res.status(200).json({ statusCode:200,data:rooms});
  } catch (error:any) {
    res.status(500).json({ statusCode:500,error: error.message });
  }
};

// Get a single room by ID
export const getRoomById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const room = await Room.findById(id);
    if (!room) return res.status(404).json({ message: 'Room not found' });
    res.status(200).json({ statusCode:200,data:room});
  } catch (error:any) {
    res.status(500).json({ statusCode:500, error: error.message });
  }
};