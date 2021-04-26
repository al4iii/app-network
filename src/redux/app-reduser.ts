import { InferActionTypes } from './redux-store';
import { auth } from "./auth-reduser";

let initialState = {
  initialized: false,
};
export type initialStateType = typeof initialState;
type ActionsType = InferActionTypes<typeof actions>

const appReducer = (state = initialState, action: ActionsType): initialStateType => {
  switch (action.type) {
    case "app/SET_INITIALIZED":
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const actions = {
  setInitializedSuccess: () => ({ type: "app/SET_INITIALIZED" } as const),
}

export const initializeApp = () => {
  return (dispatch: any) => {
    const promise = dispatch(auth());
    Promise.all([promise]).then(() => dispatch(actions.setInitializedSuccess));
  };
};

export default appReducer;
