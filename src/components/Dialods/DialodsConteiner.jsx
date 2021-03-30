import Dialods from "./Dialods";
import { newMessage, messageChange } from "../../redux/dialogs-reduser";
import { connect } from "react-redux";
import { compose } from "redux";

let mapStateToPtops = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

export default compose(connect(mapStateToPtops, { newMessage, messageChange }))(
  Dialods
);
