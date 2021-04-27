import { FormAction,reset, stopSubmit } from "redux-form";
import { profileAPI } from "../API/ProfileAPI";
import { postsType, profileType } from "../types/types";
import { BaseThunkType, InferActionTypes } from "./redux-store";

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

const profileReducer = ( state = initialState, action: ActionsType): initialStateType => {
  switch (action.type) {
    case "profile/ADD_POST":
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: state.posts.length + 1, message: action.newPost, like: 0 },
        ],
      };
    case "profile/SET_USER_PROFILE": {
      return { ...state, profile: action.profile };
    }
    case "profile/SET_MY_PROFILE_PHOTO": {
      return { ...state, myProfilePhoto: action.profile };
    }
    case "profile/SET_STATUS": {
      return { ...state, status: action.status };
    }
    case "profile/DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    case "profile/SET_PHOTO":
      return {
        ...state,
        myProfilePhoto: action.photo,
      };
    default:
      return state;
  }
};

export const actions= {
  addPost: (newPost: string) => ({ type: "profile/ADD_POST", newPost } as const),
  deletePost: (postId: number) => ({ type: "profile/DELETE_POST", postId } as const),
  setUserProfile: (profile: profileType) => ({ type: "profile/SET_USER_PROFILE", profile} as const),
  setMyProfile: (profile: string) => ({ type: "profile/SET_MY_PROFILE_PHOTO",  profile } as const),
  setStatus: (status: string) => ({ type: "profile/SET_STATUS", status } as const),
  setPhotoSuccses: (photo: string)  => ({ type: "profile/SET_PHOTO", photo } as const),
}

export const getUser = (userId: number): ThunkType => async (dispatch) => {
  let response = await profileAPI.getUser(userId);
  dispatch(actions.setUserProfile(response));
};
export const getStatus = (userId: number):ThunkType => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(actions.setStatus(response));
};
export const updateStatus = (status: string):ThunkType => async (dispatch) => {
  // let response =  profileAPI.updateStatus(status);  
    dispatch(actions.setStatus(status));   
};
export const addPosts = (newPost: string):ThunkType => async (dispatch) => {
    dispatch(actions.addPost(newPost));
    dispatch(reset("newPostText"));
};
export const savePhoto = (file: File):ThunkType   => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);
  if (response.resultCode === 0) {
    dispatch(actions.setPhotoSuccses(response.data.photos.large));
  }
};
export const saveProfile = (profile: profileType):ThunkType  => async (dispatch,  getState: any) => {  
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);
  if (response.resultCode === 0) {
    dispatch(getUser(userId));
  } else {
    dispatch(stopSubmit("editProfile", { _error: response.messages[0] }));
    return Promise.reject(response.messages[0]);
  }
};

export default profileReducer;

export type initialStateType = typeof initialState;
type ActionsType = InferActionTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>