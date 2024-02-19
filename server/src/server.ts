import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

// IMPORT ROUTES
import userRoutes from "./routes/usersRouter";
import authRoutes from "./routes/authRouter";

// CONFIGURATION
import "dotenv/config";
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

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// CONNECTION
mongoose
  .connect(MONGODB_URL)
  .then(() => console.log(`Connected to ${MONGODB_URL}`));

app.listen(PORT, () => {
  console.log("server running");
});
