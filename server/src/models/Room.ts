import mongoose, { Document, Schema } from 'mongoose';

// Define the Room interface
interface IRoom extends Document {
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
  images: string[];  // Array of image filenames or URLs
}

// Define the Room Schema
const RoomSchema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  oldPrice: { type: Number, default: 0 },
  hostel: { type: String, required: true },
  location: { type: String, required: true },
  slot: { type: Number, required: true },
  occupancy: { type: Number, required: true },
  stars: { type: [Number], default: [] },  // Array of numbers representing stars (1-5)
  category: { type: String, required: true },
  description: { type: String, required: true },
  facilities: { type: [String], default: [] },  // Array of facilities
  images: { type: [String], default: [] },  // Array of image filenames or URLs
});

// Create the Room model
const Room = mongoose.model<IRoom>('Room', RoomSchema);
export default Room;
