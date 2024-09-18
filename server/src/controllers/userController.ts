import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';



// Get User Profile
export const getUserProfile = async (req: Request|any, res: Response) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ statusCode:200,data:user});
  } catch (error:any) {
    res.status(500).json({ statusCode:500, error: error.message });
  }
};


export const getAllUseProfiles = async (req: Request|any, res: Response) => {
  try {
    const users = await User.find().select('-password').sort({ bookingDate: -1 });
    if (!users) {
      return res.status(404).json({ message: 'No Users not found' });
    }

    res.status(200).json({ statusCode:200,data:users});
  } catch (error:any) {
    res.status(500).json({ statusCode:500, error: error.message });
  }
};

// Update User Profile
export const updateUserProfile = async (req: Request|any, res: Response) => {
  try {
    const updates = req.body;
    if (updates.password) {
      updates.password = await bcrypt.hash(updates.password, 10);  // Hash new password if it's being updated
    }

    const updatedUser = await User.findByIdAndUpdate(req.user.userId, updates, { new: true }).select('-password');
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ statusCode:200,data:updatedUser});
  } catch (error:any) {
    res.status(500).json({  statusCode:500,error: error.message });
  }
};

export const updateUser = async (req: Request|any, res: Response) => {
  try {
    const updates = req.body;
    if (updates.password) {
      updates.password = await bcrypt.hash(updates.password, 10);  // Hash new password if it's being updated
    }
    if(!req.params.userId){
      return res.status(404).json({ message: 'User not found' });
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.userId, updates, { new: true }).select('-password');
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ statusCode:200,data:updatedUser});
  } catch (error:any) {
    res.status(500).json({  statusCode:500,error: error.message });
  }
};

// Delete User Account
export const deleteUserAccount = async (req: Request|any, res: Response) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.user.userId);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ statusCode:200, message: 'User account deleted successfully',data:deletedUser });
  } catch (error:any) {
    res.status(500).json({ statusCode:500, error: error.message });
  }
};

export const deleteUser = async (req: Request|any, res: Response) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.userId);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ statusCode:200, message: 'User account deleted successfully',data:deletedUser });
  } catch (error:any) {
    res.status(500).json({ statusCode:500, error: error.message });
  }
};
