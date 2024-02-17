import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/test", async (req: Request, res: Response) => {
  res.json({ message: "hello" });
});

app.listen(7000, () => {
  console.log("server running");
});
