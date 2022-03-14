import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import jobsRouter from './router/jobsRouter.js';
import { connectDB } from './db/jobs.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

app.use(jobsRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

connectDB()
  .then(() => {
    console.log('Connected to the database!');
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost${PORT}`)
    );
  })
  .catch(console.error);
