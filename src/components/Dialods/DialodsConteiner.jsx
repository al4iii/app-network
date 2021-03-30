import Dialods from "./Dialods";
import { newMessage, messageChange } from "../../redux/dialogs-reduser";
import { connect } from "react-redux";

let mapStateToPtops = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
    isAuth: state.auth.isAuth
  };
};

export default connect(mapStateToPtops, { newMessage, messageChange })(Dialods);
