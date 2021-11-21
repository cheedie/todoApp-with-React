import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { appReducer } from "./app";
import { taskReducer } from "./task";
import { logoutReducer } from "./logout";

export const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
  task: taskReducer,
});
