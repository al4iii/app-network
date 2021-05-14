import { Action, applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth-reduser";
import dialodsReducer from "./dialogs-reduser";
import profileReducer from "./profile-reduser";
import usersReducer from "./users-reduser";
import chatReducer from "./chat-reduser";
import * as reduxForm from "redux-form";
import appReducer from "./app-reduser";
import { ThunkAction } from "redux-thunk";

let rootRedusers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialodsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: reduxForm.reducer,
  app: appReducer,
  chat: chatReducer,
});

type rootRedusersType = typeof rootRedusers;
export type AppStateType = ReturnType<rootRedusersType>;
export type InferActionTypes<T> = T extends {[key: string]: (...args: any[]) => infer U } ? U : never
export type BaseThunkType<A extends Action = Action, R=Promise<void>> = ThunkAction<R, AppStateType,unknown, A>
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore( rootRedusers,  composeEnhancers(applyMiddleware(thunk)));
//@ts-ignore
window.store = store;
export default store;


