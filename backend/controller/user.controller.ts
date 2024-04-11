import bcrypt from "bcrypt";
import { Request, Response } from "express";

import User, { getUserByEmail } from "../models/user.model";
import { passwordHasher } from "../utils/password";
import { createToken } from "../utils/token";

export const registerUser = async (req: Request, res: Response) => {
  const { email, username, password } = req.body;
  try {
    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return res.status(400).json({
        message: "Email already in use.",
        success: false,
      });
    }

    const hashedPassword = await passwordHasher(password);

    const newUser = await User.create({
      email,
      username,
      password: hashedPassword,
    });

    // Generate the jwt token

    const token = createToken(newUser._id);

    res.status(201).json({
      message: "User Created",
      success: true,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message, success: false });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    // Check if the user exists
    const user = await getUserByEmail(email);

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
        success: false,
      });
    }

    // Compare the passwords
    const isMatch: boolean = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "Invalid Credentials", success: false });
    }

    const token = createToken(user._id);

    return res.status(200).json({
      message: "User Logged In",
      success: true,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message, success: false });
  }
};
