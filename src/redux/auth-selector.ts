import { AppStateType } from "./redux-store";

export const selectAuth = (state:AppStateType) => state.auth.isAuth;
export const selectAvatar= (state:AppStateType) => state.profilePage.myProfilePhoto
export const selectLogin= (state:AppStateType) => state.auth.login;
