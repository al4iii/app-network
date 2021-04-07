import { stopSubmit } from "redux-form";
import { authAPI, usersAPI } from "../API/api";
import * as profileReduser from "./profile-reduser";

const SET_USER_DATA = "auth/SET_USER_DATA";
const SET_USER_AVATAR = "auth/SET_USER_AVATAR";

let initialState = {
  isFetching: false,
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  avatar: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case SET_USER_AVATAR:
      return {
        ...state,
        avatar: action.avatar,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, login, email, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, login, email, isAuth },
});
export const setAuthUserAvatar = (avatar) => (
  { type: SET_USER_AVATAR }, avatar
);
export const auth = () => async (dispatch) => {
  let response = await authAPI.me();
  if (response.resultCode === 0) {
    let { id, login, email } = response.data;
    dispatch(setAuthUserData(id, login, email, true));
    usersAPI.getUser(id).then((response) => {
      dispatch(profileReduser.setMyProfile(response.photos.small));
    });
  }
};
export const getAuthMeData = () => async (dispatch) => {
  let response = await authAPI.me();
  if (response.resultCode === 0) {
    let { id, login, email } = response.data;
    dispatch(setAuthUserData(id, login, email, true));
  }
};
export const login = (email, password, rememberMe) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe);
  if (response.data.resultCode === 0) {
    dispatch(getAuthMeData());
  } else {
    let messages =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "common error";
    dispatch(stopSubmit("login", { _error: messages }));
  }
};
export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
