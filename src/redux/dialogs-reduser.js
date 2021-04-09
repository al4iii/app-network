import { reset } from "redux-form";

const SEND_MESSAGE = "dialog/SEND-MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Dima", active: "active" },
    { id: 2, name: "Alina", active: " " },
    { id: 3, name: "Ninja", active: " " },
    { id: 4, name: "Spider-man", active: " " },
  ],
  messages: [
    { id: 1, message: "hello!!" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "yoyo" },
    { id: 4, message: "hello man) " },
  ],
};

const dialodsReducer = (state = initialState, action) => {
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
export const newMessage = (message) => ({ type: SEND_MESSAGE, message });
export const newMessages = (message) => {
  return (dispatch) => {
    dispatch(newMessage(message));
    dispatch(reset("dialogAddMessegeForm"));
  };
};
export default dialodsReducer;
