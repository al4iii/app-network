import { auth } from "./auth-reduser";

const SET_INITIALIZED = "app/SET_INITIALIZED";

export type initialStateType = {
  initialized: boolean;
};
let initialState: initialStateType = {
  initialized: false,
};

const appReducer = (state = initialState, action: any): initialStateType => {
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

type setInitializedSuccessType = {
  type: typeof SET_INITIALIZED;
};

export const setInitializedSuccess = (): setInitializedSuccessType => ({
  type: SET_INITIALIZED,
});

export const initializeApp = () => {
  return (dispatch: any) => {
    let promise = dispatch(auth());
    Promise.all([promise]).then(() => dispatch(setInitializedSuccess));
  };
};

export default appReducer;
