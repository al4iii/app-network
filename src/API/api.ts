import axios from "axios";
import { photosType, profileType, userType } from "../types/types";

const instanse = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "bac7d47b-efec-4715-8bfd-5f98ebf82dcf",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

type GetUsersResponseType = {
  items: Array<userType>;
  totalCount: number;
  error: string;
};
type FollowUnfollowResponseType = {
  resultCode: ResultCode
  messages: Array<string>,
  data: {}
};

export const usersAPI = {
  getUsers: (pageNumber:number = 1, pageSize: number) => {
    return instanse
      .get<GetUsersResponseType>(`users?page=${pageNumber}&count=${pageSize}`)
      .then((response) => response.data);
  },
  unfollow: (id: number) => {
    return instanse.delete<FollowUnfollowResponseType>(`follow/${id}`).then((response) => response.data);
  },
  follow: (id: number) => {
    return instanse.post<FollowUnfollowResponseType>(`follow/${id}`).then((response) => response.data);
  },
  getUser: (userId: number) => {
    return instanse.get<profileType>(`profile/${userId}`).then((response) => response.data);
  },
};

export enum ResultCode {
  Success = 0,
  error = 1,
}
export enum ResultCodeWithCaptcha {
  CaptchaIsRequired = 10,
}
type MeResponseType = {
  data: { id: number; email: string; login: string };
  resultCode: ResultCode;
  messagers: Array<string>;
};

type LoginResponseType = {
  data: { userId: number };
  resultCode: ResultCode | ResultCodeWithCaptcha;
  messages: Array<string>;
};
type LoginoutResponseType = {
  resultCode: ResultCode;
  messages: Array<string>;
  data: {};
};
export const authAPI = {
  login: ( email: string, password: string, rememberMe = false, captcha: null | string = null ) =>
    instanse.post<LoginResponseType>(`auth/login`, { email, password, rememberMe, captcha })
      .then((response) => response.data),
  logout: () => instanse.delete<LoginoutResponseType>(`auth/login`).then((response) => response.data),
  me: () => instanse.get<MeResponseType>(`auth/me`).then((response) => response.data),
};

type GetCaptchaUrlType = {
  url: string;
};
export const securityAPI = {
  getCaptchaUrl: () => instanse.get<GetCaptchaUrlType>(`security/get-captcha-url`).then((response) => response),
};

export const profileAPI = {
  getStatus: (userId: number) =>
    instanse.get(`/profile/status/${userId}`).then((response) => response.data),
  savePhoto: (file: any) => {
    const formData = new FormData();
    formData.append("image", file);
    return instanse
      .put(`/profile/photo`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => response.data);
  },
  saveProfile: (profile: profileType) => {
    return instanse.put(`/profile`, profile).then((response) => response.data);
  },
  updateStatus: (status: string) =>
    instanse
      .put(`/profile/status`, { status: status })
      .then((response) => response),
};
