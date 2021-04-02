import { authAPI, usersAPI } from "../API/api";
import { setMyProfile } from "./profile-reduser";

const SET_USER_DATA = "auth/SET_USER_DATA";
const SET_USER_AVATAR = "auth/SET_USER_AVATAR";

let initialState = {
  isFetching: false,
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  avatar: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    case SET_USER_AVATAR:
      return {
        ...state,
        avatar: action.avatar,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, login, email) => ({
  type: SET_USER_DATA,
  data: { userId, login, email },
});
export const setAuthUserAvatar = (avatar) => (
  { type: SET_USER_AVATAR }, avatar
);

export const auth = () => {
  return (dispatch) => {
    authAPI.getAuth().then((response) => {
      if (response.resultCode === 0) {
        let { id, login, email } = response.data;
        dispatch(setAuthUserData(id, login, email));
        usersAPI.getUser(id).then((response) => {
          dispatch(setMyProfile(response.photos.small));
        });
      }
    });
  };
};
export const getAuthMeData = () => async (dispatch) => {
  let response = await authAPI.me();
  if (response.resultCode === 0) {
    let { id, login, email } = response.data;
    dispatch(setAuthUserData(id, login, email, true));
  }
};
export const authentication = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.authentication(email, password, rememberMe).then((response) => {
      debugger;
      if(response.data.resultCode === 0 ){
        dispatch(getAuthMeData()) 
      }
      
    });
  };
};

export default authReducer;
