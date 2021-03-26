const SEND_MESSAGE = "dialog/SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "dialog/UPDATE_NEW_MESSAGE_TEXT";

let initialState = {
  dialogs: [
    { id: 1, name: "Dima", active: "active" },
    { id: 2, name: "Alina", active: " " },
    { id: 3, name: "Ninja", active: " " },
    { id: 4, name: "Spider-man", active: " " },
  ],
  messages: [
    { id: 1, message: "hello" },
    { id: 2, message: "How are you" },
    { id: 3, message: "yoyo" },
    { id: 4, message: "hello-man " },
  ],
  newMessageText: "",
};

const dialodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return state.newMessageText
        ? {
            ...state,
            messages: [
              ...state.messages,
              { id: state.messages.length + 2, message: state.newMessageText },
            ],
            newMessageText: "",
          }
        : { ...state };
    case UPDATE_NEW_MESSAGE_TEXT:
      return { ...state, newMessageText: action.messege };
    default:
      return state;
  }
};

export const messageChange = (messege) => ({type: UPDATE_NEW_MESSAGE_TEXT, messege});
export const newMessage = () => ({ type: SEND_MESSAGE });
export default dialodsReducer;
