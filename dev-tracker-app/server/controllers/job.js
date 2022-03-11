import { Job } from '../model/jobs.js'

//get
export async function retrieveJobs(req, res) {
  try {
    console.log("Inside retrieve jobs")
    const jobs = await JobRepository.getAll();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(404).send( {error, message: 'Sorry, nothing found'})
  }
}

// post

 export const createJob = async function (req, res) {
  try {
    const newJob = await Job.create(req.body)
    console.log(newJob);
    res.status(200).send(newJob)
  } catch (error) {
    if (!req.body.company || !req.body.position || !req.body.status) {
      res.status(404).send({ error, message: "input field is missing" });
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
    res.status(500).send({error, message: "Sorry, post can't be deleted"})
  }
}

//update
const updateJop = async function (req, res) {
  try {
    const { jobId }  = req.params.id;
    const updated = await jobRepository.findAndUpdateById({_id : jobId}, req.body);
    console.log("updated", updated);
    res.status(200).send(updated);
  } catch (error) {
    res.status(500).send({error, message: "Sorry, post can't be updated"}); 
  }
}

