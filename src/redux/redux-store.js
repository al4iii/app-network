import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth-reduser";
import dialodsReducer from "./dialogs-reduser";
import profileReducer from "./profile-reduser";
import appReducer from "./app-reduser";
import usersReducer from "./users-reduser";
import { reducer as formReducer } from "redux-form";

let redusers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialodsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(redusers, composeEnhancers(applyMiddleware(thunk)));
window.store = store;
export default store;
