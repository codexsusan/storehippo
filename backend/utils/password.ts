import bcrypt from "bcrypt";
import { SALT_ROUNDS } from "../constant";

export const passwordHasher = async (password: string) => {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  return await bcrypt.hash(password, salt);
};
