import { FormAction, stopSubmit } from "redux-form";
import { ResultCode, ResultCodeWithCaptcha } from "../API/api";
import { authAPI } from "../API/AuthAPI";
import { securityAPI } from "../API/SecurityAPI";
import { profileAPI } from "../API/ProfileAPI";
import * as profileReduser from "./profile-reduser";
import { BaseThunkType, InferActionTypes } from "./redux-store";

let initialState = {
  isFetching: false as boolean,
  userId: null as number | null,
  login: null as string | null,
  email: null as string | null,
  isAuth: false,
  avatar: null as string | null,
  captchaUrl: null as string | null,
};

const authReducer = (state = initialState, action: ActionsType): initialStateType => {
  switch (action.type) {
    case "auth/SET_USER_DATA":
    case "auth/GET_CAPTCHA_URL_SUCCESS":
      return {
        ...state,        
        ...action.payload,
      };
    default:
      return state;
  }
};

export const actions = {
  getCaptchaUrlSuccess: (captchaUrl: string) => ({ type: "auth/GET_CAPTCHA_URL_SUCCESS", payload: { captchaUrl } }as const ),
  setAuthUserData: ( userId: number | null, login: string | null, email: string | null, isAuth: boolean ) => ({
    type: "auth/SET_USER_DATA", payload: { userId, login, email, isAuth } } as const ),
};
export const auth = (): ThunkType => async (dispatch) => {
  let response = await authAPI.me();
  if (response.resultCode === 0) {
    let { id, login, email } = response.data;
    dispatch(actions.setAuthUserData(id, login, email, true));
    profileAPI.getUser(id).then((response: any) => {
      dispatch(profileReduser.actions.setMyProfile(response.photos.small));
    });
  }
};
export const getAuthMeData = (): ThunkType => async (dispatch) => {
  let response = await authAPI.me();
  if (response.resultCode === ResultCode.Success) {
    let { id, login, email } = response.data;
    dispatch(actions.setAuthUserData(id, login, email, true));
  }
};
export const login = ( email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => 
async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe, captcha);
  if (response.resultCode === ResultCode.Success) {
    dispatch(getAuthMeData());
  } else {
    if (response.resultCode === ResultCodeWithCaptcha.CaptchaIsRequired) {
      dispatch(getCaptchaUrl());
    }
    let messages = response.messages.length > 0
        ? response.messages[0]
        : "common error";
    dispatch(stopSubmit("login", { _error: messages }));
  }
};
export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  dispatch(actions.getCaptchaUrlSuccess(response.data.url));
};
export const logout = () => async (dispatch: any) => {
  let response = await authAPI.logout();
  if (response.resultCode === ResultCode.Success) {
    dispatch(actions.setAuthUserData(null, null, null, false));
  }
};

export default authReducer;

export type initialStateType = typeof initialState;
type ActionsType = InferActionTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>