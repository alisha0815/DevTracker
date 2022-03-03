import { ADD } from "../reducers/jobs";

export const addNewJob = (company, position, status) => {
  return {
    type: ADD,
    company,
    position,
    status,
  };
};
