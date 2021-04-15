import { userType } from "./../types/types";
import { usersAPI } from "../API/api";
import { updateObjectInArray } from "../helpers/validators/objects-helpers";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET_USERS";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_CURRENT = "users/SET_TOTAL_USERS_CURRENT";
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "users/TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [] as Array<userType>,
  pageSize: 100 as number,
  totalUsersCount: 0 as number,
  currentPage: 1 as number,
  isFetching: true as boolean,
  followingInProgress: [] as Array<number>, //array of users ids
};

type initialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_CURRENT:
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
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
type followSucsessType = { type: typeof FOLLOW; userId: number };
export const followSucsess = (userId: number): followSucsessType => ({
  type: FOLLOW,
  userId,
});
type unfollowSucsessType = { type: typeof UNFOLLOW; userId: number };
export const unfollowSucsess = (userId: number): unfollowSucsessType => ({
  type: UNFOLLOW,
  userId,
});
type setUsersType = { type: typeof SET_USERS; users: Array<userType> };
export const setUsers = (users: Array<userType>): setUsersType => ({
  type: SET_USERS,
  users,
});
type setCurrentPagesType = { type: typeof SET_CURRENT_PAGE; currentPage: number };
export const setCurrentPages = (currentPage: number): setCurrentPagesType => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
type setTotalUsersCountType = { type: typeof SET_TOTAL_USERS_CURRENT; totalCount: number };
export const setTotalUsersCount = ( totalCount: number): setTotalUsersCountType => ({
  type: SET_TOTAL_USERS_CURRENT,
  totalCount,
});
type toggleIsFetchingType = { type: typeof TOGGLE_IS_FETCHING; isFetching: boolean};
export const toggleIsFetching = ( isFetching: boolean ): toggleIsFetchingType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
type toggleFollowType = { type: typeof TOGGLE_IS_FOLLOWING_PROGRESS; isFetching: boolean; id: number};
export const toggleFollow = ( isFetching: boolean, id: number): toggleFollowType => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  id,
});
export const getUsersAC = (page: number, pageSize: number) => async (
  dispatch: any
) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPages(page));
  let response = await usersAPI.getUsers(page, pageSize);
  dispatch(setUsers(response.items));
  dispatch(setTotalUsersCount(response.totalCount));
  dispatch(toggleIsFetching(false));
};
export const unfollow = (id: number) => async (dispatch: any) => {
  dispatch(toggleFollow(true, id));
  let response = await usersAPI.unfollow(id);
  if (response.resultCode == 0) {
    dispatch(unfollowSucsess(id));
  }
  dispatch(toggleFollow(false, id));
};
export const follow = (id: number) => async (dispatch: any) => {
  dispatch(toggleFollow(true, id));
  let response = await usersAPI.follow(id);
  if (response.resultCode == 0) {
    dispatch(followSucsess(id));
  }
  dispatch(toggleFollow(false, id));
};

export default usersReducer;
