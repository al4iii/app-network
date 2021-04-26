import { userType } from "./../types/types";
import { updateObjectInArray } from "../helpers/validators/objects-helpers";
import { InferActionTypes, AppStateType } from "./redux-store";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { usersAPI } from "../API/UserAPI";

let initialState = {
  users: [] as Array<userType>,
  pageSize: 100 as number,
  totalUsersCount: 0 as number,
  currentPage: 1 as number,
  isFetching: true as boolean,
  followingInProgress: [] as Array<number>, //array of users ids
};

type initialStateType = typeof initialState;

const usersReducer = (state = initialState, action: ActionsTypes): initialStateType => {
  switch (action.type) {
    case "user/FOLLOW":
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };
    case "user/UNFOLLOW":
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };
    case "user/SET_USERS":
      return {
        ...state,
        users: [...action.users],
      };
    case "user/SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case "user/SET_TOTAL_USERS_CURRENT":
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };
    case "user/TOGGLE_IS_FETCHING":
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case "user/TOGGLE_IS_FOLLOWING_PROGRESS":
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.id]
          : state.followingInProgress.filter((id) => id != action.id),
      };
    default:
      return state;
  }
};

type ActionsTypes = InferActionTypes<typeof actions>

export const actions = {
 followSucsess : (userId: number) => ({ type: "user/FOLLOW", userId } as const),
 unfollowSucsess : (userId: number) => ({ type: "user/UNFOLLOW", userId } as const),
 setUsers : (users: Array<userType>) => ({ type: "user/SET_USERS", users } as const),
 setCurrentPages : (currentPage: number) => ({ type: "user/SET_CURRENT_PAGE", currentPage } as const),
 setTotalUsersCount : ( totalCount: number) => ({ type: "user/SET_TOTAL_USERS_CURRENT", totalCount } as const),
 toggleIsFetching : ( isFetching: boolean ) => ({ type: "user/TOGGLE_IS_FETCHING", isFetching } as const),
 toggleFollow : ( isFetching: boolean, id: number) => ({ type: "user/TOGGLE_IS_FOLLOWING_PROGRESS", isFetching, id } as const), 

}

type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType,unknown, ActionsTypes>

export const getUsersAC = (page: number, pageSize: number): ThunkType => async ( dispatch) => {
  dispatch(actions.toggleIsFetching(true));
  dispatch(actions.setCurrentPages(page));
  let response = await usersAPI.getUsers(page, pageSize);
  dispatch(actions.setUsers(response.items));
  dispatch(actions.setTotalUsersCount(response.totalCount));
  dispatch(actions.toggleIsFetching(false));
};
export const unfollow = (id: number): ThunkType => async (
  dispatch) => {
  dispatch(actions.toggleFollow(true, id));
  let response = await usersAPI.unfollow(id);
  if (response.resultCode == 0) {
    dispatch(actions.unfollowSucsess(id));
  }
  dispatch(actions.toggleFollow(false, id));
};
export const follow = (id: number) => async (
  dispatch: DispatchType, getState: GetStateType) => {
  dispatch(actions.toggleFollow(true, id));
  let response = await usersAPI.follow(id);
  if (response.resultCode == 0) {
    dispatch(actions.followSucsess(id));
  }
  dispatch(actions.toggleFollow(false, id));
};

export default usersReducer;
