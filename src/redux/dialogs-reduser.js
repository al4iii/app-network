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

const dialodsReduser = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let message = state.newMessageText;
      let newId = state.messages.length + 2;
      let newMessage = { id: newId, message: message };
      let stateCopy = { ...state };
      stateCopy.messages = [...state.messages]
      state.newMessageText
        ? stateCopy.messages.push(newMessage)
        : (stateCopy.newMessageText = "");
        stateCopy.newMessageText = "";
      return stateCopy;
    }
    case UPDATE_NEW_MESSAGE_TEXT:{
      let stateCopy = { ...state };
      stateCopy.newMessageText = [...state.newMessageText ]
      stateCopy.newMessageText = action.messege;
      return stateCopy;
    }     
    default:
      return state;
  }
};

export const updateNewMessageAC = (messege) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  messege: messege,
});
export const sendMessageAC = () => ({ type: SEND_MESSAGE });
export default dialodsReduser;
