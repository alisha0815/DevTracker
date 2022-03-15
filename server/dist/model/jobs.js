"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Job = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const JobSchema = new mongoose_1.default.Schema({
    uid: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        enum: ['frontend', 'backend', 'fullstack'],
    },
    status: {
        type: String,
        enum: [
            'interested',
            'applied',
            'phone-interview',
            'technical interview',
            'declined',
            'accepted',
        ],
        default: 'interested',
    },
    date_applied: {
        type: Date,
    },
    date_interview: {
        type: Date,
    },
}, { timestamps: true });
exports.Job = mongoose_1.default.model('Job', JobSchema);
