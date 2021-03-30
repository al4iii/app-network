import { authAPI } from "../API/api";

const SET_USER_DATA = "auth/SET_USER_DATA";
const SET_USER_AVATAR = "auth/SET_USER_AVATAR";

let initialState = {
  isFetching: false,
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  avatar: null
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
  return (dispapch) => {
    authAPI.getAuth().then((response) => {
      if (response.resultCode === 0) {
        let { id, login, email } = response.data;
        dispapch(setAuthUserData(id, login, email));
      }
    });
  };
};
export default authReducer;
