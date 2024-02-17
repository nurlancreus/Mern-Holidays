import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// IMPORT ROUTES
import userRoutes from "./routes/usersRouter";
import authRoutes from "./routes/authRouter";

// CONFIGURATION
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 7000;
const MONGODB_URL = process.env.MONGO_DATABASE_URL!;

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// CONNECTION
mongoose.connect(MONGODB_URL);

app.listen(PORT, () => {
  console.log("server running");
});
