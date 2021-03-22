const SEND_MESSAGE = "dialog/SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "dialog/UPDATE_NEW_MESSAGE_TEXT";

const dialodsReduser = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let message = state.newMessageText;
      let newId = state.messages.length + 2;
      let newMessage = { id: newId, message: message };
      state.newMessageText ? state.messages.push(newMessage) : (state.newMessageText = "");
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.messege;
      return state;
    default:
      return state;
  }
};

export const updateNewMessageAC = (messege) => ({ type: UPDATE_NEW_MESSAGE_TEXT, messege: messege});
export const sendMessageAC = () => ({ type: SEND_MESSAGE });
export default dialodsReduser;
