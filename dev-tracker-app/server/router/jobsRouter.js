import express from "express";
import * as jobsController from "../controllers/job.js";
import { isAuth } from "../middleware/auth.js";

const jobsRouter = express.Router();

// GET
jobsRouter.get("/list", isAuth, jobsController.retrieveJobs);

// POST
jobsRouter.post("/add", isAuth, jobsController.createJob);

// DELETE
jobsRouter.delete("/list/:id", isAuth, jobsController.removeJob);

// PUT
jobsRouter.put("/edit/:id", isAuth, jobsController.updateJop);

export default jobsRouter;
