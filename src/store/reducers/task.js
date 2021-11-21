import { TASK_COMPLETED, ADD_TASK } from "../constants";

const initialState = [];

export const taskReducer = (state = initialState, action) => {
  if (action.type === TASK_COMPLETED) {
    return [...action.payload];
  }
  if (action.type === ADD_TASK) {
    return [
      ...state,
      {
        ...action.payload,
      },
    ];
  }
  return state;
};
