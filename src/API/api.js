import * as axios from "axios";

const instanse = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "5fbca2cc-88e1-4c18-b855-d03cb389add5",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const usersAPI = {
  getUsers: (pageNumber = 1, pageSize) => {
    return instanse
      .get(`users?page=${pageNumber}&count=${pageSize}`)
      .then((response) => response.data);
  },
  unfollow: (id) => {
    return instanse.delete(`follow/${id}`).then((response) => response.data);
  },
  follow: (id) => {
    return instanse.post(`follow/${id}`).then((response) => response.data);
  },
  getUser: (userId) => {
    return instanse.get(`profile/${userId}`).then((response) => response.data);
  },
};

export const authAPI = {
  login: (email, password, rememberMe = false, captcha = null) =>
    instanse
      .post(`auth/login`, { email, password, rememberMe, captcha })
      .then((response) => response),
  logout: () => instanse.delete(`auth/login`).then((response) => response),
  me: () => instanse.get(`auth/me`).then((response) => response.data),
};

export const securityAPI = {
  getCaptchaUrl: () =>
    instanse.get(`security/get-captcha-url`).then((response) => response),
};

export const profileAPI = {
  getStatus: (userId) =>
    instanse.get(`/profile/status/${userId}`).then((response) => response.data),
  savePhoto: (file) => {
    const formData = new FormData();
    formData.append("image", file);
    return instanse
      .put(`/profile/photo`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => response.data);
  },
  saveProfile: (profile) => {
    return instanse.put(`/profile`, profile).then((response) => response.data);
  },
  updateStatus: (status) =>
    instanse
      .put(`/profile/status`, { status: status })
      .then((response) => response),
};
