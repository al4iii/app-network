import { usersAPI } from "../API/api";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET_USERS";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_CURRENT = "users/SET_TOTAL_USERS_CURRENT";
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "users/TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
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

export const followSucsess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSucsess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPages = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalCount) => ({
  type: SET_TOTAL_USERS_CURRENT,
  totalCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollow = (isFetching, id) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  id,
});

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then((response) => {
      dispatch(setUsers(response.items));
      dispatch(setTotalUsersCount(response.totalCount));
      dispatch(toggleIsFetching(false));
    });
  };
};

export const unfollow = (id) => {
  return (dispatch) => {
    dispatch(toggleFollow(true, id));
    usersAPI.unfollow(id).then((response) => {
      response.resultCode == 0 && dispatch(unfollowSucsess(id));
      dispatch(toggleFollow(false, id));
    });
  };
};

export const follow = (id) => {
  return (dispatch) => {
    dispatch(toggleFollow(true, id));
    usersAPI.follow(id).then((response) => {
      response.resultCode == 0 && dispatch(followSucsess(id));
      dispatch(toggleFollow(false, id));
    });
  };
};

export default usersReducer;
