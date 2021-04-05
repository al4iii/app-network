import { auth } from "./auth-reduser";

const SET_INITIALIZED = "app/SET_INITIALIZED";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const setInitializedSuccess = () => ({ type: SET_INITIALIZED });

export const initializeApp = () => {
  return (dispatch) => {
    let promise = dispatch(auth());
    Promise.all([promise]).then(() => dispatch(setInitializedSuccess));
  };
};

export default appReducer;
