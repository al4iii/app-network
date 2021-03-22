import React from "react";
import Dialods from "./Dialods";
import { sendMessageAC, updateNewMessageAC } from "../../redux/dialogs-reduser";

const DialodsConteiner = (props) => {
  return (
    <Dialods
      dialogs={props.state.dialogs}
      messages={props.state.messages}
      newMessageText={props.state.newMessageText}
      newMessage={() => props.dispatch(sendMessageAC())}
      messageChange={(text) => props.dispatch(updateNewMessageAC(text))}
    />
  );
};

export default DialodsConteiner;
