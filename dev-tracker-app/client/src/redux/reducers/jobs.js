export const ADD = "ADD";

export const jobsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          company: action.company,
          postion: action.position,
          status: action.status,
        },
      ];
    default:
      return state;
  }
};
