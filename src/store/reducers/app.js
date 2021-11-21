import { IS_LOADING } from "../constants";

const initialState = { isLoading: false };

export const appReducer = (state = initialState, action) => {
  if (action.type) {
    return { ...state, isLoading: action.payload };
  }
  return state;
};
