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
      enum: ["frontend", "backend", "fullstack"],
    },
    status: {
      type: String,
      enum: [
        "interested",
        "applied",
        "phone-interview",
        "technical interview",
        "declined",
        "accepted",
      ],
      default: "interested",
    },
    date_applied: {
      type: Date,
    },
    date_interview: {
      type: Date,
    },
  },
  { timestamps: true }
);

// create job model
export const Job = Mongoose.model("Job", JobSchema);

// // get by Id
// export async function getById(id) {
//   return Job.findById(id);
// }

// // get
// export async function getAllJobs() {
//   return Job.find();
// }

// // post
// export async function postJob(
//   company,
//   position,
//   status,
//   date_applied,
//   date_interview
// ) {
//   return new Job({
//     company,
//     position,
//     status,
//     date_applied,
//     date_interview,
//   }).save();
// }

// // delete
// export async function deleteJob(id) {
//   return Job.findByIdAndDelete(id);
// }

// // update
// export async function update(
//   id,
//   company,
//   position,
//   status,
//   date_applied,
//   date_interview
// ) {
//   return await Job.findByIdAndUpdate(
//     id,
//     { company, position, status, date_applied, date_interview },
//     { new: true }
//   );
// }

// useVirtualId(JobSchema);

// export default Job;
