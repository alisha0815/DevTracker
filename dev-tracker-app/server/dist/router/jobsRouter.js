"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const job_js_1 = require("../controllers/job.js");
const jobsRouter = express_1.default.Router();
// GET
jobsRouter.get("/list", job_js_1.retrieveJobs);
// POST
jobsRouter.post("/add", job_js_1.createJob);
// DELETE
jobsRouter.delete("/deletelist/:jobId", job_js_1.removeJob);
// PUT
jobsRouter.put("/edit/:jobId", job_js_1.updateJob);
exports.default = jobsRouter;
