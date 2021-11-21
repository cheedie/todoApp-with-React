import { act } from "@testing-library/react";
import { IS_AUTHENTICATED, USER_DETAILS } from "../constants";

const initialState = { isAuthenticated: false, userDetails: null };

export const authReducer = (state = initialState, action) => {
  if (action.type === IS_AUTHENTICATED) {
    return { ...state, isAuthenticated: action.payload };
  }
  if (action.type === USER_DETAILS) {
    return { ...state, userDetails: action.payload };
  }
  return state;
};
