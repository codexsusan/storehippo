import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";

import { dbConnection } from "./db_connection/connection";
import { PORT } from "./constant";
import mainRoutes from "./routes/main.routes";

const port = PORT || 3000;
const app = express();
app.use(cors());

// Middleware
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1", mainRoutes);

app.use("*", (_req: Request, res: Response): void => {
  res.status(404).send({ message: "Route Not Found", success: false });
});

app.use(
  (_err: Error, _req: Request, res: Response, _next: NextFunction): void => {
    res.status(500).send({ message: "Something went wrong!" });
  }
);

app.listen(port, async () => {
  await dbConnection();
  return console.log(`Server running on port http://localhost:${port}`);
});
