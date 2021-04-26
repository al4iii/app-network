import { userType } from "./../types/types";
import { usersAPI } from "../API/api";
import { updateObjectInArray } from "../helpers/validators/objects-helpers";
import { InferActionTypes, AppStateType } from "./redux-store";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

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
    case "FOLLOW":
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };
    case "UNFOLLOW":
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };
    case "SET_USERS":
      return {
        ...state,
        users: [...action.users],
      };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case "SET_TOTAL_USERS_CURRENT":
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };
    case "TOGGLE_IS_FETCHING":
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case "TOGGLE_IS_FOLLOWING_PROGRESS":
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
 followSucsess : (userId: number) => ({ type: "FOLLOW", userId } as const),
 unfollowSucsess : (userId: number) => ({ type: "UNFOLLOW", userId } as const),
 setUsers : (users: Array<userType>) => ({ type: "SET_USERS", users } as const),
 setCurrentPages : (currentPage: number) => ({ type: "SET_CURRENT_PAGE", currentPage } as const),
 setTotalUsersCount : ( totalCount: number) => ({ type: "SET_TOTAL_USERS_CURRENT", totalCount } as const),
 toggleIsFetching : ( isFetching: boolean ) => ({ type: "TOGGLE_IS_FETCHING", isFetching } as const),
 toggleFollow : ( isFetching: boolean, id: number) => ({ type: "TOGGLE_IS_FOLLOWING_PROGRESS", isFetching, id } as const), 

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
