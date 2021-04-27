import { photosType, profileType } from "../types/types";
import { instanse, ResponseType } from "./api";

type SavePhotoResponceDataType = {
  photos: photosType
}

export const profileAPI = {
  getStatus: (userId: number) =>
    instanse.get<string>(`/profile/status/${userId}`).then((response) => response.data),
  savePhoto: (file: File) => {
    const formData = new FormData();
    formData.append("image", file);
    return instanse
      .put(`/profile/photo`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => response.data);
  },
  saveProfile: (profile: profileType) => {
    return instanse.put<ResponseType<SavePhotoResponceDataType>>(`/profile`, profile).then((response) => response.data);
  },
  updateStatus: (status: string) => {
    instanse
      .put(`/profile/status`, { status: status })
      .then((response) => response.data);
  },
  getUser: (userId: number) => {
    return instanse
      .get<profileType>(`profile/${userId}`)
      .then((response) => response.data);
  },
};
