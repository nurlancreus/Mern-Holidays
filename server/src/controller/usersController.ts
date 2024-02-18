import { Request, Response } from "express";
import User from "../models/user";
import { validationResult } from "express-validator";
import { signJwtToken } from "../utils/signJwtToken";

export const userRegister = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty())
    return res.status(400).json({ message: errors.array() });

  try {
    let user = await User.findOne({
      email: req.body.email,
    });

    if (user) return res.status(400).json({ message: "User already exists!" });

    user = new User(req.body);

    await user.save();

    const token = signJwtToken(user.id);

    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 864_000_00,
    });

    return res.status(200).send({ message: "User successfully registered", ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Something went wrong" });
  }
};
