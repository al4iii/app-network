import React from "react";
import ReactDOM from "react-dom";
import "../index.css";
import { BrowserRouter } from "react-router-dom";
import state, { addMessage, addPost } from "./state";
import App from "../App";

const rerenderEntireTree = (props) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          posts={state.profilePage.posts}
          dialogs={state.messagePage.dialogs}
          messages={state.messagePage.messages}
          addPost={addPost}
          addMessage={addMessage}
        />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

export default rerenderEntireTree;
