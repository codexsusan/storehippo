import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../constant";
import { UserInterface } from "../types";

export const createToken = (userId: UserInterface["_id"]) => {
  return jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: "7d",
  });
};
