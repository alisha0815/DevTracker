import express from "express";
import { createJob, retrieveJobs, removeJob, updateJob }  from "../controllers/job.js";


const jobsRouter = express.Router();

// GET
jobsRouter.get("/list", retrieveJobs);

// POST
jobsRouter.post("/add", createJob);

// DELETE
jobsRouter.delete("/deletelist/:jobId", removeJob );

// PUT
jobsRouter.put("/edit/:jobId", updateJob);

export default jobsRouter;
