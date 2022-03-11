import Mongoose from "mongoose";


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


export const Job = Mongoose.model("Job", JobSchema);

