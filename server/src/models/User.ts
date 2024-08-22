import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
  fullName: string;
  phoneNumber: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
}

const UserSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
});

const User = mongoose.model<IUser>('User', UserSchema);
export default User;
