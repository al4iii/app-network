import { reset } from "redux-form";
import * as api from "../API/api";

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
  ],
  profile: null,
  myProfilePhoto: null,
  status: " ",
};

const profileReducer = (state = initialState, action = {}) => {
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

export const addPost = (newPost) => ({ type: ADD_POST, newPost });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setMyProfile = (profile) => ({
  type: SET_MY_PROFILE_PHOTO,
  profile,
});
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const setPhotoSuccses = (photo) => ({ type: SET_PHOTO, photo });
export const getUser = (userId) => async (dispatch) => {
  let response = await api.usersAPI.getUser(userId);
  dispatch(setUserProfile(response));
};
export const getStatus = (userId) => async (dispatch) => {
  let response = await api.profileAPI.getStatus(userId);
  dispatch(setStatus(response));
};
export const updateStatus = (status) => async (dispatch) => {
  let response = await api.profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
export const addPosts = (newPost) => {
  return (dispatch) => {
    dispatch(addPost(newPost));
    dispatch(reset("newPostText"));
  };
};
export const savePhoto = (file) => async (dispatch) => {
  debugger;
  let response = await api.profileAPI.savePhoto(file);
  if (response.resultCode === 0) {
    debugger;
    dispatch(setPhotoSuccses(response.data.photos.large));
  }
};

export default profileReducer;
