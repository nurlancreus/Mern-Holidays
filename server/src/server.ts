import path from "path";
import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import { v2 as cloudinary } from "cloudinary";

// IMPORT ROUTES
import userRoutes from "./routes/usersRouter";
import authRoutes from "./routes/authRouter";
import myHotelRoutes from "./routes/myHotelsRouter";

// CONFIGURATION
// IMPORT DOTENV
import "dotenv/config";

// CLOUDINARY CONFIG
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// GENERAL MIDDLEWARES
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

const PORT = process.env.PORT || 8800;
const MONGODB_URL = process.env.MONGO_DATABASE_URL!;

// USE STATIC ASSETS MIDDLEWARE
app.use(express.static(path.join(__dirname, "../../client/dist")));

// USE ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/my-hotels", myHotelRoutes);

// CONNECTION
mongoose
  .connect(MONGODB_URL)
  .then(() => console.log(`Connected to ${MONGODB_URL}`));

app.listen(PORT, () => {
  console.log(`server running on localhost:${PORT}`);
});
