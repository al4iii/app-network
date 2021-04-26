
import { GetItemsType, instanse, ResultCode, ResponseType } from "./api";

export type FollowUnfollowResponseType = {
  resultCode: ResultCode
  messages: Array<string>,
  data: {}
};

export const usersAPI = {
  getUsers: (pageNumber: number = 1, pageSize: number) => {
    return instanse
      .get<GetItemsType>(`users?page=${pageNumber}&count=${pageSize}`)
      .then((response) => response.data);
  },
  unfollow: (id: number) => {
    return instanse
      .delete(`follow/${id}`) 
      .then((response) => response.data) as Promise<ResponseType>
  },
  follow: (id: number) => {
    return instanse
      .post<ResponseType>(`follow/${id}`)
      .then((response) => response.data);
  },
};

