import Dialods from "./Dialods";
import { actions } from "../../redux/dialogs-reduser";
import { connect } from "react-redux";
import { compose } from "redux";

let mapStateToPtops = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
    myProfilePhoto: state.profilePage.myProfilePhoto,
  };
};
let mapDispatchToPtops = () => {
  return {
    newMessages: actions.newMessages,
  };
};

export default compose(connect(mapStateToPtops, mapDispatchToPtops))(Dialods);
