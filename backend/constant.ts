// App
export const PORT = process.env.PORT || 3500;

// Database
export const DATABASE_URL = process.env.DATABASE_URL;

// JWT
export const JWT_SECRET = process.env.JWT_SECRET;

// Bcrypt
export const SALT_ROUNDS: number = parseInt(process.env.SALT_ROUNDS!) || 10;
