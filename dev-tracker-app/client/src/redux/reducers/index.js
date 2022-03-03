import { combineReducers } from "redux";
import { jobsReducer } from "./jobs";

export const combinedReducers = combineReducers({
  jobsReducer,
});
