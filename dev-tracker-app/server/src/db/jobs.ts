import Mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// const { DB_MONGO_HOST } = process.env;
const DB_MONGO_HOST = process.env.DB_MONGO_HOST;

export async function connectDB() {
  // return new Mongoose.connect(DB_MONGO_HOST);
  return Mongoose.connect(DB_MONGO_HOST!);
}