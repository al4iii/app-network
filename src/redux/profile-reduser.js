import { usersAPI } from "../API/api";

const ADD_POST = "profile/ADD-POST";
const UPDATE_NEW_POST_TEXT = "profile/UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_MY_PROFILE_PHOTO = "profile/SET_MY_PROFILE_PHOTO";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", like: 1 },
    { id: 2, message: "Hi!!", like: 55 },
    { id: 3, message: "I'm sexy and I know it", like: 144 },
    { id: 4, message: "Have a good day", like: 15 },
    { id: 5, message: "It's my first post!!", like: 177 },
  ],
  newPostText: "",
  profile: null,
  myProfilePhoto: null
};

const profileReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_POST:
      return state.newPostText
        ? {
            ...state,
            posts: [
              ...state.posts,
              {
                id: state.posts.length + 2,
                message: state.newPostText,
                like: 0,
              },
            ],
            newPostText: "",
          }
        : { ...state };
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.post };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_MY_PROFILE_PHOTO: {
      return { ...state, myProfilePhoto: action.profile };
    }
    default:
      return state;
  }
};

export const postChecge = (post) => ({ type: UPDATE_NEW_POST_TEXT, post });
export const addPost = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setMyProfile = (profile) => ({
  type: SET_MY_PROFILE_PHOTO,
  profile,
});

export const getUser = (userId) => {
  return (dispatch) => {
    usersAPI.getUser(userId).then((response) => {
      dispatch(setUserProfile(response));
    });
  };
};

export default profileReducer;
