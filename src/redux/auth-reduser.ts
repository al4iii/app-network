import { stopSubmit } from "redux-form";
import { authAPI, ResultCode, ResultCodeWithCaptcha, securityAPI, usersAPI } from "../API/api";
import * as profileReduser from "./profile-reduser";

const SET_USER_DATA = "auth/SET_USER_DATA";
const SET_USER_AVATAR = "auth/SET_USER_AVATAR";
const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS";

let initialState = {
  isFetching: false as boolean,
  userId: null as number | null,
  login: null as string | null,
  email: null as string | null,
  isAuth: false,
  avatar: null as string | null,
  captchaUrl: null as string | null,
};
export type initialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,        
        ...action.payload,
      };
    default:
      return state;
  }
};
type setAuthUserAvatarType = {
  type: typeof SET_USER_AVATAR;
  avatar: string;
};
export const setAuthUserAvatar = (avatar: string): setAuthUserAvatarType => ({
  type: SET_USER_AVATAR,
  avatar,
});
type getCaptchaUrlSuccessType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS;
  payload: { captchaUrl: string };
};
export const getCaptchaUrlSuccess = (
  captchaUrl: string
): getCaptchaUrlSuccessType => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});
type setAuthUserDataPayloadType = {
  userId: number | null;
  login: string | null;
  email: string | null;
  isAuth: boolean;
};

type setAuthUserDataType = {
  type: typeof SET_USER_DATA;
  payload: setAuthUserDataPayloadType;
};
export const setAuthUserData = (
  userId: number | null,
  login: string | null,
  email: string | null,
  isAuth: boolean
): setAuthUserDataType => ({
  type: SET_USER_DATA,
  payload: { userId, login, email, isAuth },
});

export const auth = () => async (dispatch: any) => {
  let response = await authAPI.me();
  if (response.resultCode === 0) {
    let { id, login, email } = response.data;
    dispatch(setAuthUserData(id, login, email, true));
    usersAPI.getUser(id).then((response: any) => {
      dispatch(profileReduser.setMyProfile(response.photos.small));
    });
  }
};
export const getAuthMeData = () => async (dispatch: any) => {
  let response = await authAPI.me();
  if (response.resultCode === ResultCode.Success) {
    let { id, login, email } = response.data;
    dispatch(setAuthUserData(id, login, email, true));
  }
};
export const login = (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string
) => async (dispatch: any) => {
  let response = await authAPI.login(email, password, rememberMe, captcha);
  if (response.resultCode === ResultCode.Success) {
    dispatch(getAuthMeData());
  } else {
    debugger;
    if (response.resultCode === ResultCodeWithCaptcha.CaptchaIsRequired) {
      dispatch(getCaptchaUrl());
    }
    let messages =
      response.messages.length > 0
        ? response.messages[0]
        : "common error";
    dispatch(stopSubmit("login", { _error: messages }));
  }
};
export const getCaptchaUrl = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptchaUrl();
  dispatch(getCaptchaUrlSuccess(response.data.url));
};
export const logout = () => async (dispatch: any) => {
  let response = await authAPI.logout();
  if (response.resultCode === ResultCode.Success) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
