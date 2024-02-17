import { Request, Response } from "express";
import { validationResult } from "express-validator";
import User from "../models/user";
import bcrypt from "bcryptjs";
import { signJwtToken } from "../utils/signJwtToken";

export const loginUser = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty())
    return res.status(400).json({ message: errors.array() });

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const isMatch = bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid Credentials" });

    const token = signJwtToken(user.id);

    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 864_000_00,
    });

    res.status(200).json({ userId: user.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

