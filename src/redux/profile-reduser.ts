import { reset, stopSubmit } from "redux-form";
import * as api from "../API/api";
import { photosType, postsType, profileType } from "../types/types";

const ADD_POST = "profile/ADD-POST";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_MY_PROFILE_PHOTO = "profile/SET_MY_PROFILE_PHOTO";
const SET_STATUS = "profile/SET_STATUS";
const DELETE_POST = "profile/DELETE_POST";
const SET_PHOTO = "profile/SET_PHOTO";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", like: 1 },
    { id: 2, message: "Hi!!", like: 55 },
    { id: 3, message: "I know it...", like: 144 },
    { id: 4, message: "Have a good day", like: 15 },
    { id: 5, message: "It's my first post!!", like: 177 },
  ] as Array<postsType>,
  profile: null as profileType | null,
  myProfilePhoto: null as null | string,
  status: " " as string,
};
export type initialStateType = typeof initialState;

const profileReducer = ( state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: state.posts.length + 1, message: action.newPost, like: 0 },
        ],
      };
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_MY_PROFILE_PHOTO: {
      return { ...state, myProfilePhoto: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id != action.postId),
      };
    case SET_PHOTO:
      return {
        ...state,
        myProfilePhoto: action.photo,
      };
    default:
      return state;
  }
};
type addPostType ={type: typeof ADD_POST, newPost: string }
export const addPost = (newPost: string): addPostType => ({ type: ADD_POST, newPost });
type deletePostType ={type: typeof DELETE_POST, postId: number }
export const deletePost = (postId: number): deletePostType => ({ type: DELETE_POST, postId });
type setUserProfileType ={type: typeof SET_USER_PROFILE, profile: profileType }
export const setUserProfile = (profile: profileType):setUserProfileType => ({ type: SET_USER_PROFILE, profile});
type setMyProfileType ={type: typeof SET_MY_PROFILE_PHOTO, profile: profileType }
export const setMyProfile = (profile: profileType):setMyProfileType => ({ type: SET_MY_PROFILE_PHOTO,  profile });
type setStatusType ={type: typeof SET_STATUS, status: string }
export const setStatus = (status: string): setStatusType => ({ type: SET_STATUS, status });
type setPhotoSuccsesType ={type: typeof SET_PHOTO, photo: photosType }
export const setPhotoSuccses = (photo: photosType):setPhotoSuccsesType => ({ type: SET_PHOTO, photo });

export const getUser = (userId: number) => async (dispatch: any) => {
  let response = await api.usersAPI.getUser(userId);
  dispatch(setUserProfile(response));
};
export const getStatus = (userId: number) => async (dispatch: any) => {
  let response = await api.profileAPI.getStatus(userId);
  dispatch(setStatus(response));
};
export const updateStatus = (status: string) => async (dispatch: any) => {
  let response = await api.profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
export const addPosts = (newPost: string) => {
  return (dispatch: any) => {
    dispatch(addPost(newPost));
    dispatch(reset("newPostText"));
  };
};
export const savePhoto = (file: any) => async (dispatch: any) => {
  let response = await api.profileAPI.savePhoto(file);
  if (response.resultCode === 0) {
    dispatch(setPhotoSuccses(response.data.photos.large));
  }
};
export const saveProfile = (profile: profileType) => async (
  dispatch: any,
  getState: any
) => {
  debugger;
  const userId = getState().auth.userId;
  const response = await api.profileAPI.saveProfile(profile);
  if (response.resultCode === 0) {
    dispatch(getUser(userId));
  } else {
    dispatch(stopSubmit("editProfile", { _error: response.messages[0] }));
    return Promise.reject(response.messages[0]);
  }
};

export default profileReducer;
