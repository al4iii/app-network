import { combineReducers, createStore } from "redux";
import authReducer from "./auth-reduser";
import dialodsReducer from "./dialogs-reduser";
import profileReducer from "./profile-reduser";
import usersReducer from "./users-reduser";

let redusers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialodsReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

let store = createStore(redusers);
window.store = store;

export default store;
