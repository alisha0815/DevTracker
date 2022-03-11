import express from "express";
import { createJob }  from "../controllers/job.js";
// import { isAuth } from "../middleware/auth.js";

const jobsRouter = express.Router();

// GET
jobsRouter.get("/list" );

// POST
jobsRouter.post("/add", createJob);

// DELETE
jobsRouter.delete("/list/:id" );

// PUT
jobsRouter.put("/edit/:id");

export default jobsRouter;
