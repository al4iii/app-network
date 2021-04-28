import Dialods from "./Dialods";
import { actions } from "../../redux/dialogs-reduser";
import { connect } from "react-redux";
import { compose } from "redux";
import { AppStateType } from "../../redux/redux-store";

let mapStateToPtops = (state:AppStateType) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    myProfilePhoto: state.profilePage.myProfilePhoto,
  };
};

const newMessages = actions.newMessage

export default compose<React.ComponentType>(connect(mapStateToPtops, {newMessages}))(Dialods);
