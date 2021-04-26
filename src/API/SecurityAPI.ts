import { instanse } from "./api";

export type GetCaptchaUrlType = {
  url: string;
};

export const securityAPI = {
  getCaptchaUrl: () => instanse.get<GetCaptchaUrlType>(`security/get-captcha-url`).then((response) => response),
};