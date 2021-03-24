import { combineReducers, createStore } from "redux";
import dialodsReducer from "./dialogs-reduser";
import profileReducer from "./profile-reduser";
import usersReducer from "./users-reduser";

let redusers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialodsReducer,
  usersPage: usersReducer,
});

let store = createStore(redusers);
window.store = store;

export default store;
