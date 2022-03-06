import * as jobRepository from "../model/jobs.js";

//get
export async function retrieveJobs(req, res) {
  const jobs = await jobRepository.getAllJobs();
  res.status(200).json(jobs);
}

// post
export async function createJob(req, res) {
  try {
    const { company, position, status, date_applied, date_interview } =
      req.body;
    const newJob = await jobRepository.postJob(
      company,
      position,
      status,
      date_applied,
      date_interview
    );
    console.log("created", company);
    res.status(201).json(newJob);
  } catch (error) {
    if (!req.body.company || !req.body.position || !req.body.status) {
      res.status(404).send({ message: "input field is missing" });
    }
  }
}

// delete
export async function removeJob(req, res) {
  const id = req.params.id;
  await jobRepository.deleteJob(id);
  res.sendStatus(204);
}

//update
export async function updateJop(req, res) {
  const id = req.params.id;
  const company = req.body.company;
  const position = req.body.position;
  const status = req.body.status;
  const date_applied = req.body.date_applied;
  const date_interview = req.body.date_interview;
  await jobRepository.getById(id);
  const updated = await jobRepository.update(
    id,
    company,
    position,
    status,
    date_applied,
    date_interview
  );
  console.log("updated", updated);
  res.status(200).send(updated);
}
