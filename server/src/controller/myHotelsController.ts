import { Request, Response } from "express";
import cloudinary from "cloudinary";
import Hotel, { type THotel } from "../models/hotel";
import { Types } from "mongoose";

export const createHotel = async (req: Request, res: Response) => {
  try {
    const imageFiles = req.files as Express.Multer.File[];
    const newHotel: THotel = req.body;

    // 1. upload the images to cloudinary
    const uploadPromises = imageFiles.map(async (image) => {
      // converting image to the 'base64' string
      const b64 = Buffer.from(image.buffer).toString("base64");

      let dataURI = `data:${image.mimetype};base64,${b64}`;

      // upload each image in the array to the cloudinary
      const res = await cloudinary.v2.uploader.upload(dataURI);

      return res.url;
    });

    // 2. if upload was successful, add the URLs to the new hotel
    const imageUrls = await Promise.all(uploadPromises);
    newHotel.imageUrls = imageUrls;
    newHotel.lastUpdated = new Date();

    newHotel.userId = req.userId;

    // 3. save the new hotel in our database
    const hotel = new Hotel(newHotel);
    await hotel.save();

    // 4. return a 201 status
    res.status(201).send(hotel);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
