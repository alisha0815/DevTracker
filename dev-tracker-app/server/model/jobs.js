import Mongoose from "mongoose";
import { useVirtualId } from "../db/jobs.js";

// create job schema
const JobSchema = new Mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["interested", "ghosted", "interview", "declined", "accepted"],
      default: "interested",
    },
  },
  { timestamps: true }
);

// create job model
const Job = Mongoose.model("Job", JobSchema);

// get
export async function getAllJobs() {
  return Job.find();
}

// post
export async function postJob(company, position, status) {
  return new Job({
    company,
    position,
    status,
  }).save();
}

// delete
export async function deleteJob(id) {
  return Job.findByIdAndDelete(id);
}

// convert virtual id to readable id
useVirtualId(JobSchema);

export default Job;
