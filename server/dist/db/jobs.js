"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// const { DB_MONGO_HOST } = process.env;
const DB_MONGO_HOST = process.env.DB_MONGO_HOST;
async function connectDB() {
    // return new Mongoose.connect(DB_MONGO_HOST);
    return mongoose_1.default.connect(DB_MONGO_HOST);
}
exports.connectDB = connectDB;
