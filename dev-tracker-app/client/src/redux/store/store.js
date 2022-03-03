import { configureStore } from "@reduxjs/toolkit";
import { jobsReducer } from "../reducers/jobs";

export default configureStore({
  reducer: {
    jobs: jobsReducer,
  },
});
