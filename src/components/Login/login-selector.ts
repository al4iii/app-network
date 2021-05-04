import { AppStateType } from "../../redux/redux-store";

export const getCaptchaUrl = (state:AppStateType) => state.auth.captchaUrl;
export const getIsAuth = (state:AppStateType) => state.auth.isAuth;
