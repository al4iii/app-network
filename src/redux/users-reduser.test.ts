import { AppStateType } from './redux-store';
import usersReducer, { actions, initialStateType } from "./users-reduser";

let state: initialStateType;
beforeEach(
  () =>
    (state = {
      users: [
        { isOwner: false, id: 0, name: "din", followed: false, photos: { small: null, large: null }, status: "sdv" },
        { isOwner: false, id: 1, name: "dij;n", followed: true, photos: { small: null, large: null }, status: "sdxzbv" },
        { isOwner: true, id: 2, name: "dsdcvsin", followed: false, photos: { small: null, large: null }, status: "sdsdcv" },
        { isOwner: true, id: 3, name: "dijsdvcs;n", followed: true, photos: { small: null, large: null }, status: "sdxzsdcbv" },
      ],
      pageSize: 100 as number,
      totalUsersCount: 0 as number,
      currentPage: 1 as number,
      isFetching: false,
      followingInProgress: [], //array of users ids
      filter: {
        term: "" as string,
        friend: null as null | boolean,
      },
    })
);
test("follow success", () => {
  const newState = usersReducer(state, actions.followSucsess(1));
  expect(newState.users[0].followed).toBeFalsy();
  expect(newState.users[1].followed).toBeTruthy();
});
test("unfollow success", () => {
  const newState = usersReducer(state, actions.unfollowSucsess(2));
  expect(newState.users[2].followed).toBeFalsy();
  expect(newState.users[3].followed).toBeTruthy();
});

