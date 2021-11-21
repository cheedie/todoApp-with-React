import { LOGOUT } from "../constants";

export const logoutAction = (payload) => {
  return { type: LOGOUT, payload };
};
