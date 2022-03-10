import Mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// const { DB_MONGO_HOST } = process.env;
const DB_MONGO_HOST = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'

export async function connectDB() {
  return new Mongoose.connect(DB_MONGO_HOST);
}

export function useVirtualId(schema) {
  schema.virtual("id").get(function () {
    return this._id.toString();
  });
  schema.set("toJSON", { virtuals: true });
  schema.set("toOject", { virtuals: true });
}
