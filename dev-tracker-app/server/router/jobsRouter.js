import express from "express";
import { createJob, retrieveJobs } from "../controllers/job.js";

const jobsRouter = express.Router();

jobsRouter.get("/", retrieveJobs);
jobsRouter.post("/", createJob);

export default jobsRouter;
