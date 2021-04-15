import { reset } from "redux-form";

const SEND_MESSAGE = "dialog/SEND-MESSAGE";
type DialogType = {
  id: number;
  name: string;
  active: string;
};
type MessagesType = {
  id: number
  message: string  
};
let initialState = {
  dialogs: [
    { id: 1, name: "Dima", active: "active" },
    { id: 2, name: "Alina", active: " " },
    { id: 3, name: "Ninja", active: " " },
    { id: 4, name: "Spider-man", active: " " },
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: "hello!!" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "yoyo" },
    { id: 4, message: "hello man) " },
  ] as Array<MessagesType>,
};

export type initialStateType = typeof initialState;

const dialodsReducer = (state = initialState, action: any ) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          { id: state.messages.length + 2, message: action.message },
        ],
      };
    default:
      return state;
  }
};

type newMessageType ={type: typeof SEND_MESSAGE, message: string}
export const newMessage = (message: string): newMessageType => ({ type: SEND_MESSAGE, message });

export const newMessages = (message: string) => {
  return (dispatch: any) => {
    dispatch(newMessage(message));
    dispatch(reset("dialogAddMessegeForm"));
  };
};
export default dialodsReducer;
