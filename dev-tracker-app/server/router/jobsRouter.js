import express from "express";
import { createJob, retrieveJobs } from "../controllers/job.js";
import { deleteJob } from "../model/jobs.js";

const jobsRouter = express.Router();

jobsRouter.get("/", retrieveJobs);
jobsRouter.post("/", createJob);
jobsRouter.delete("/:id", deleteJob);

export default jobsRouter;
