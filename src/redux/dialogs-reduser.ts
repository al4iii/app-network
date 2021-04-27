import { DialogType, MessagesType } from './../types/types';
import { reset } from "redux-form";
import { InferActionTypes } from "./redux-store";

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

const dialodsReducer = (state = initialState, action: ActionsType ) => {
  switch (action.type) {
    case "dialog/SEND_MESSAGE":
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

export const actions= {
  newMessage :(message: string) => ({ type: "dialog/SEND_MESSAGE", message } as const ),
}

export const newMessages = (message: string) => {
  return (dispatch: any) => {
    dispatch(actions.newMessage(message));
    dispatch(reset("dialogAddMessegeForm"));
  };
};

export default dialodsReducer;

export type initialStateType = typeof initialState;
type ActionsType = InferActionTypes<typeof actions>