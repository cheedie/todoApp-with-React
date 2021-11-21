import { ADD_TASK, TASK_COMPLETED } from "../constants";

export const taskAction = (payload) => {
  return (dispatch, getState) => {
    dispatch({ type: ADD_TASK, payload: { ...payload } });
  };
};

export const taskComplete = (payload) => {
  return (dispatch, getState) => {
    dispatch({ type: TASK_COMPLETED, payload: { ...payload } });
  };
};
