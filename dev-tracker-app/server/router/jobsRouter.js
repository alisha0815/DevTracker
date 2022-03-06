import express from "express";
import * as jobsController from "../controllers/job.js";
// import { isAuth } from "../middleware/auth.js";

const jobsRouter = express.Router();

// GET
jobsRouter.get("/list", jobsController.retrieveJobs);

// POST
jobsRouter.post("/add", jobsController.createJob);

// DELETE
jobsRouter.delete("/list/:id", jobsController.removeJob);

// PUT
jobsRouter.put("/edit/:id", jobsController.updateJop);

export default jobsRouter;
