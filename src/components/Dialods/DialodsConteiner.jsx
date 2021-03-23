import React from "react";
import Dialods from "./Dialods";
import { sendMessageAC, updateNewMessageAC } from "../../redux/dialogs-reduser";
import StoreContext from "../../StoreContext";

const DialodsConteiner = () => {
  return (
    <StoreContext.Consumer>
      {(store) => (
        <Dialods
          dialogs={store.getState().dialogsPage.dialogs}
          messages={store.getState().dialogsPage.messages}
          newMessageText={store.getState().dialogsPage.newMessageText}
          newMessage={() => store.dispatch(sendMessageAC())}
          messageChange={(text) => store.dispatch(updateNewMessageAC(text))}
        />
      )}
    </StoreContext.Consumer>
  );
};

export default DialodsConteiner;
