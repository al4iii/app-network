import { postsType, profileType } from "../types/types";
import profileReducer, { actions } from "./profile-reduser";
let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", like: 1 },
    { id: 2, message: "Hi!!", like: 55 },
    { id: 3, message: "I know it...", like: 144 },
    { id: 4, message: "Have a good day", like: 15 },
    { id: 5, message: "It's my first post!!", like: 177 },
  ] as Array<postsType>,
  profile: null as profileType | null,
  myProfilePhoto: null as null | string,
  status: " " as string,
};
test("length of post should be incremented", () => {
  // 1 test date
  let action = actions.addPost("newPost");
  // 2 action
  let newState = profileReducer(state, action);
  // 3 expectation
  expect(newState.posts.length).toBe(6);
});

test("message of new posts should be correct", () => {
  // 1 test date
  let action = actions.addPost("newPost");
  // 2 action
  let newState = profileReducer(state, action);
  // 3 expectation
  expect(newState.posts[5].message).toBe("newPost");
});

test("after deleting length of messages should be decrement", () => {
  // 1 test date
  let action = actions.deletePost(1);
  //2 action
  let newState = profileReducer(state, action);
  //3 expectation
  expect(newState.posts.length).toBe(4);
});

test("after deleting length shouldn't be decrement if id is incorrect", () => {
  // 1 test date
  let action = actions.deletePost(1000);
  //2 action
  let newState = profileReducer(state, action);
  //3 expectation
  expect(newState.posts.length).toBe(5);
});
