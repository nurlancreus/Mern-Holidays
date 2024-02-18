import express from "express";
import { loginUser, validateToken } from "../controller/authController";
import { check } from "express-validator";
import { verifyToken } from "../middleware/authMiddlewares";

const router = express.Router();

router.post(
  "/login",
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password with 6 or more characters required").isLength({
      min: 6,
    }),
  ],
  loginUser
);

router.get("/validate-token", verifyToken, validateToken)

export default router;
