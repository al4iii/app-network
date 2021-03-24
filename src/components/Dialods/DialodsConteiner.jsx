import Dialods from "./Dialods";
import { sendMessageAC, updateNewMessageAC } from "../../redux/dialogs-reduser";
import { connect } from "react-redux";

let mapStateToPtops = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  };
};
let mapDispatchToPtops = (dispatch) => {
  return {
    newMessage: () => {
      dispatch(sendMessageAC());
    },
    messageChange: (text) => {
      dispatch(updateNewMessageAC(text));
    },
  };
};

export default connect(mapStateToPtops, mapDispatchToPtops)(Dialods);
