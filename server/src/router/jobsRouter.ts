import express from 'express';
import {
  createJob,
  retrieveJobs,
  removeJob,
  updateJob,
} from '../controllers/job';

const jobsRouter = express.Router();

// GET
// jobsRouter.post('/list', retrieveJobs);
jobsRouter.get('/list', retrieveJobs);

// POST
jobsRouter.post('/add', createJob);

// DELETE
jobsRouter.delete('/list/:jobId', removeJob);

// PUT
jobsRouter.put('/edit/:jobId', updateJob);

export default jobsRouter;
