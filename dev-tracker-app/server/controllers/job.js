import { getAllJobs, postJob } from "../model/jobs.js";

//get jobs
export async function retrieveJobs(req, res) {
  const jobs = await getAllJobs();
  res.status(200).json(jobs);
}

// post job
export async function createJob(req, res) {
  try {
    const { company, position, status } = req.body;
    const newJob = await postJob(company, position, status);
    res.status(201).json(newJob);
  } catch (error) {
    if (!req.body.company || !req.body.position || !req.body.status) {
      res.status(404).send({ message: "input field is missing" });
    }
  }
}
