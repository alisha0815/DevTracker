"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeJob = exports.updateJob = exports.createJob = exports.retrieveJobs = void 0;
const jobs_1 = require("../model/jobs");
//Find all jobs
const retrieveJobs = async (req, res) => {
    try {
        // const { id } = req.body;
        // const jobs = await Job.find({ uid: id });
        const jobs = await jobs_1.Job.find({});
        res.send(jobs);
    }
    catch (error) {
        res.status(404).send({ error, message: 'Sorry, nothing found' });
    }
};
exports.retrieveJobs = retrieveJobs;
//Post a new job
const createJob = async (req, res) => {
    try {
        const newJob = await jobs_1.Job.create(req.body);
        console.log(newJob);
        res.status(200).send(newJob);
    }
    catch (error) {
        if (!req.body.company || !req.body.position || !req.body.status) {
            res.status(404).send({ error, message: 'Input field is missing' });
        }
    }
};
exports.createJob = createJob;
//Update Job information
const updateJob = async (req, res) => {
    try {
        const { jobId } = req.params;
        console.log('REQ', req.body);
        const updated = await jobs_1.Job.findOneAndUpdate({ _id: jobId }, req.body);
        res.status(200).send(updated);
    }
    catch (error) {
        res
            .status(500)
            .send({ error, message: "Sorry, Job post can't be updated" });
    }
};
exports.updateJob = updateJob;
// Delete job post
const removeJob = async (req, res) => {
    console.log('DEL CONTROLLER');
    try {
        const { jobId } = req.params;
        console.log(jobId, 'thi is the JOb id');
        const deletedJob = await jobs_1.Job.findByIdAndDelete({ _id: jobId });
        res.status(204).send({ deletedJob, message: 'Job has been deleted' });
    }
    catch (error) {
        res
            .status(500)
            .send({ error, message: "Sorry, Job post can't be deleted" });
    }
};
exports.removeJob = removeJob;
