import express, { Request, Response } from "express";
import userRoutes from "./user.routes";
const router = express.Router();

router.get("/", (_: Request, res: Response): void => {
  res.send({
    message: "Hello everyone! This is the first version of the API.",
  });
});

router.get("/users", userRoutes);

export default router;
