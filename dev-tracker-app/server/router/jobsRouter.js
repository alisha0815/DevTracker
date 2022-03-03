import express from "express";
import * as jobsController from "../controllers/job.js";

const jobsRouter = express.Router();

// GET
jobsRouter.get("/list", jobsController.retrieveJobs);

// POST
jobsRouter.post("/add", jobsController.createJob);

// DELETE
jobsRouter.delete("/list/:id", jobsController.removeJob);

// PUT
// jobsRouter.post("/list/edit/:id", updateJob);

export default jobsRouter;
