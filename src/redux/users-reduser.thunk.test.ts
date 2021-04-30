import { actions, follow, unfollow } from "./users-reduser";
import { usersAPI } from "../API/UserAPI";
import { ResponseType, ResultCode } from './../API/api';

jest.mock("../API/UserAPI")
const usersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>
const result: ResponseType={
  resultCode: ResultCode.Success,
  messages: [],
  data: {}
}
 usersAPIMock.follow.mockReturnValue(Promise.resolve(result))
 usersAPIMock.unfollow.mockReturnValue(Promise.resolve(result))
test("success follow thank", () => {
  const thunk = follow(1)
  const dispatchMock = jest.fn()
  const getStateMock = jest.fn()
  thunk(dispatchMock, getStateMock, {}) 
  expect(dispatchMock).toBeCalledTimes(1)
  expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollow(true, 1) )
});
test("success unfollow thank", () => {
  const thunk = unfollow(1)
  const dispatchMock = jest.fn()
  const getStateMock = jest.fn()
  thunk(dispatchMock, getStateMock, {}) 
  expect(dispatchMock).toBeCalledTimes(1)
  expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollow(true, 1) )
});

