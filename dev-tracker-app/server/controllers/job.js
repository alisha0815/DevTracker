import * as jobRepository from "../model/jobs.js";
import { Job } from '../model/jobs'

//get
export async function retrieveJobs(req, res) {
try {
  const jobs = await Job.getAll();
  res.status(200).json(jobs);
} catch (error) {
  res.status(404).send(error, {message: 'Sorry, nothing found'})
}


}

// post

export async function createJob(req, res) {
  try {
    const newJob = await Job.create(req.body)
    console.log("created", company);
    res.status(201).json(newJob);
  } catch (error) {
    if (!req.body.company || !req.body.position || !req.body.status) {
      res.status(404).send(error, { message: "input field is missing" });
    }
  }
}

// THIS IS THE CODE MODIFICATIOPN
// delete
export async function removeJob(req, res) {
  try {
    const { id } = req.params.id;
    await Job.findAndDeleteById({_id : id});
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error, {message: "Sorry, post can't be deleted"})
  }
}

//update
export async function updateJop(req, res) {
  try {
    const { jobId }  = req.params.id;
    const updated = await jobRepository.findAndUpdateById({_id : jobId}, req.body);
    console.log("updated", updated);
    res.status(200).send(updated);
  } catch (error) {
    res.status(500).send(error, {message: "Sorry, post can't be updated"}); 
  }
}
