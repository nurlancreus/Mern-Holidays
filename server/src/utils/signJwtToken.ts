import jwt from "jsonwebtoken";

export const signJwtToken = (userId: string) =>
  jwt.sign({ userId }, process.env.JWT_SECRET_KEY!, {
    expiresIn: "1d",
  });
