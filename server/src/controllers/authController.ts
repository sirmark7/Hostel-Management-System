import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import User from '../models/User';

export const register = async (req: Request, res: Response) => {
  const { fullName, phoneNumber, email, password,confirmPassword,role } = req.body;
  try {
    if(!fullName&&!phoneNumber&&!email&&!password!==confirmPassword){
      throw new Error('All feilds are required')
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      fullName,
      phoneNumber,
      email,
      password: hashedPassword,
      role
    });
  const result =  await newUser.save();
    res.status(201).json({ statusCode:201, message: 'User registered successfully',data:result });
  } catch (error:any) {
    res.status(500).json({statusCode:500, error: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
      if(!email&&!password){
      throw new Error('All feilds are required')
    }
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({statusCode:400, message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({statusCode:400, message: 'Invalid credentials' });

    // const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET as string, {
    //   expiresIn: 'h',
    // });
    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET as string);

    res.status(200).json({statusCode:200, token ,user});
  } catch (error:any) {
    res.status(500).json({statusCode:500, error: error.message });
  }
};
