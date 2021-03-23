import { combineReducers, createStore } from "redux";
import dialodsReduser from "./dialogs-reduser";
import profileReduser from "./profile-reduser";

let redusers = combineReducers({
  profilePage: profileReduser,
  dialogsPage: dialodsReduser,
});

let store = createStore(redusers);
window.store = store

export default store;
