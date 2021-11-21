import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/root";
import thunk from "redux-thunk";
import { STORE } from "./constants";



const store = () => {
  let initialState = localStorage.getItem(STORE);
  if (initialState) {
    initialState = JSON.parse(initialState);
  } else {
    initialState = {};
  }
  const persistStore = (store) => (next) => (action) => {
    const result = next(action);
    const state = store.getState();
    localStorage.setItem(STORE, JSON.stringify(state));
    return result;
  };
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, persistStore)
  );
};
export default store();
