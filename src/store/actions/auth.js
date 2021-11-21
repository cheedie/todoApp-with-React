import { IS_AUTHENTICATED, USER_DETAILS } from "../constants";



export const confirmAction = (payload) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        dispatch({ type: IS_AUTHENTICATED, payload: true });
        dispatch({
          type: USER_DETAILS,
          payload: {
            ...payload,
          },
        });
        return resolve({ status: 200, success: true });
      }, 1000);
    });
  };
};
