import { Model, Schema, model } from "mongoose";
import { UserInterface } from "../types";

const userSchema = new Schema<UserInterface>({
  email: { type: String, required: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const User: Model<UserInterface> = model("User", userSchema);
export default User;

export const getUserByEmail = async (email: UserInterface["email"]) => {
  try {
    return User.findOne({ email });
  } catch (e) {
    console.log("Error while fetching user", e);
    throw e;
  }
};