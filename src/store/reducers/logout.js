import { bindActionCreators } from "redux";
import { LOGOUT } from "../constants";

export const logoutReducer = (state, action) => {
  if (action.type === LOGOUT) {
    return { ...state, isAuthenticated: false, userDetails: action.payload };
  }
  return state;
};
