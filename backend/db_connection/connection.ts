import mongoose from "mongoose";
import { DATABASE_URL } from "../constant";

export const dbConnection = async () => {
  const dbString: string = DATABASE_URL as string;
  console.log("Connecting to database ...");
  try {
    await mongoose.connect(dbString).then(() => {
      console.log("Connected to database");
    });
  } catch (error) {
    console.log("Database connection failed");
    console.log(error);
  }
};
