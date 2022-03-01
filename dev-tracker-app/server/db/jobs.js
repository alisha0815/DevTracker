import Mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const { DB_MONGO_HOST } = process.env;

export async function connectDB() {
  return new Mongoose.connect(DB_MONGO_HOST);
}
