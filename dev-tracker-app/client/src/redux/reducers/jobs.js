export const ADD = "ADD";

export const jobsReducer = (jobs = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...jobs,
        {
          company: action.company,
          postion: action.position,
          status: action.status,
        },
      ];
    default:
      return jobs;
  }
};
