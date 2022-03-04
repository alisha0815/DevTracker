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

// get by Id
export async function getById(id) {
  return Job.findById(id);
}

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

// update
export async function update(id, company, position, status) {
  return await Job.findByIdAndUpdate(
    id,
    { company, position, status },
    { new: true }
  );
}

useVirtualId(JobSchema);

export default Job;
