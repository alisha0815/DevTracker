import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import jobsRouter from "./router/jobsRouter.js";
import { connectDB } from "./db/jobs.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));


app.use(jobsRouter);

// app.use((req, res) => {
//   res.sendStatus(404);
// });

// app.use((error, req, res) => {
//   console.error(error);
//   res.sendStatus(500);
// });

connectDB()
  .then(() => {
    console.log("init!");
    app.listen(PORT, () =>
      console.log(`server running on http://localhost${PORT}`)
    );
  })
  .catch(console.error);
