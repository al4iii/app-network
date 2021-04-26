import { instanse, ResponseType, ResultCodeWithCaptcha, ResultCode } from "./api";

type MeResponseDataType = { id: number, email: string, login: string };
type LoginResponseType = { userId: number }

export const authAPI = {
  login: ( email: string, password: string, rememberMe = false, captcha: null | string = null ) =>
    instanse
      .post<ResponseType<LoginResponseType , ResultCode | ResultCodeWithCaptcha>>(`auth/login`, {
        email, password, rememberMe, captcha,
      })
      .then((response) => response.data),
  logout: () =>
    instanse
      .delete(`auth/login`)
      .then((response) => response.data),
  me: () =>
    instanse
      .get<ResponseType<MeResponseDataType>>(`auth/me`)
      .then((response) => response.data),
};