import { chatAPI } from "./../API/chat";
import { FormAction } from "redux-form";
import { BaseThunkType, InferActionTypes } from "./redux-store";
import { MessageType } from "../API/chat";
import { Dispatch } from "redux";

let initialState = {
  messages: [] as MessageType[],
};
export type initialStateType = typeof initialState;
type ActionsType = InferActionTypes<typeof actions>;

const chatReducer = (
  state = initialState,
  action: ActionsType
): initialStateType => {
  switch (action.type) {
    case "chat/MESSAGES_RECEVIED":
      return {
        ...state,
        messages: [...state.messages, ...action.payload.messages],
      };
    default:
      return state;
  }
};

export const actions = {
  messagesReceived: (messages: MessageType[]) =>
    ({ type: "chat/MESSAGES_RECEVIED", payload: { messages } } as const),
};
let _newMesagesHander: ((messages: MessageType[]) => void) | null = null;

const newMesagesHander = (dispatch: Dispatch) => {
  if (_newMesagesHander === null) {
    _newMesagesHander = (messages) => {
      dispatch(actions.messagesReceived(messages));
    };
  }
  return _newMesagesHander;
};

export const startMessagesLintening =
  (): ThunkType => async (dispatch, getState: any) => {
    chatAPI.start();
    chatAPI.subscribe(newMesagesHander(dispatch));
  };

export const stopMessagesLintening =
  (): ThunkType => async (dispatch, getState: any) => {
    chatAPI.unsubscribe(newMesagesHander(dispatch));
    chatAPI.stop();
  };
export const sendMessages =
  (message: string): ThunkType =>
  async (dispatch, getState: any) => {
    chatAPI.sendMessage(message);
  };

type ThunkType = BaseThunkType<ActionsType | FormAction>;
export default chatReducer;
