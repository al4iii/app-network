import React from "react";
import Dialods from "./Dialods";
import {  sendMessageAC, updateNewMessageAC } from "../../redux/dialogs-reduser";
import store from "../../redux/state";

const DialodsConteiner = (props) => {
  return (
    <Dialods     
      dialogs={store.getState().dialogsPage.dialogs}
      messages={store.getState().dialogsPage.messages}
      newMessageText={store.getState().dialogsPage.newMessageText}
      newMessage={() => store.dispatch(sendMessageAC())}
      messageChange={(text) => store.dispatch(updateNewMessageAC(text))}
    />
  );
};

export default DialodsConteiner;
