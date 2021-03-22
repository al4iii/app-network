import { combineReducers, createStore } from "redux";
import dialodsReduser from "./dialogs-reduser";
import profileReduser from "./profile-reduser";

let redusers = combineReducers({
  profilePage: dialodsReduser,
  dialogsPage: profileReduser,
});

let store = createStore(redusers);

export default store;
