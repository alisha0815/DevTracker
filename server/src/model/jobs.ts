import Mongoose from 'mongoose';

interface Job {
  company: string;
  position: string;
  status: string;
  date_applied: Date;
  date_interview: Date;
}

const JobSchema = new Mongoose.Schema<Job>(
  {
    company: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      enum: ['frontend', 'backend', 'fullstack'],
    },
    status: {
      type: String,
      enum: [
        'interested',
        'applied',
        'phone-interview',
        'technical interview',
        'declined',
        'accepted',
      ],
      default: 'interested',
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

export const Job = Mongoose.model<Job>('Job', JobSchema);
