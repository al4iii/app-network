import { v1 } from 'uuid';
import { MessageChatAPIType } from './../API/chatAPI';
import { chatAPI, StatusType } from "../API/chatAPI";
import { FormAction } from "redux-form";
import { BaseThunkType, InferActionTypes } from "./redux-store";
import { Dispatch } from "redux";


export type ChatMessageType = MessageChatAPIType & {id: string}


let initialState = {
  messages: [] as ChatMessageType[],
  status: "panding" as StatusType
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
        messages: [...state.messages, ...action.payload.messages.map(m=> ({...m, id: v1() }))].filter((m, index, array)=> index >= array.length-100 ),
      };
    case "chat/STATUS_CHANGED":
      return {
        ...state,
        status: action.payload.status,
      };
    default:
      return state;
  }
};

export const actions = {
  messagesReceived: (messages: MessageChatAPIType[]) =>
    ({ type: "chat/MESSAGES_RECEVIED", payload: { messages } } as const),
  statusChanged: (status: StatusType) =>
    ({ type: "chat/STATUS_CHANGED", payload: { status } } as const),
};

let _newMesagesHander: ((messages: MessageChatAPIType[]) => void) | null = null;
let _statusChangedHander: ((status: StatusType) => void) | null = null;

const newMesagesHanderCreater = (dispatch: Dispatch) => {
  if (_newMesagesHander === null) {
    _newMesagesHander = (messages) => {
      dispatch(actions.messagesReceived(messages));
    };
  }
  return _newMesagesHander;
};
const statusChangedHanderCreater = (dispatch: Dispatch) => {
  if (_statusChangedHander === null) {
    _statusChangedHander = (status) => {
      dispatch(actions.statusChanged(status));
    };
  }
  return _statusChangedHander;
};

export const startMessagesLintening = (): ThunkType => async (dispatch) => {
    chatAPI.start();
    chatAPI.subscribe("messages-receive", newMesagesHanderCreater(dispatch));
    chatAPI.subscribe("status-changed", statusChangedHanderCreater(dispatch));
};

export const stopMessagesLintening =
  (): ThunkType => async (dispatch) => {
    chatAPI.unsubscribe("messages-receive",newMesagesHanderCreater(dispatch));
    chatAPI.subscribe("status-changed", statusChangedHanderCreater(dispatch));
    chatAPI.stop();
};

export const sendMessages = (message: string): ThunkType =>
  async () => { chatAPI.sendMessage(message)
};

type ThunkType = BaseThunkType<ActionsType | FormAction>;
export default chatReducer;
