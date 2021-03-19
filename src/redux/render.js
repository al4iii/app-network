import React from "react";
import ReactDOM from "react-dom";
import "../index.css";
import { BrowserRouter } from "react-router-dom";
import state, { addMessage, addPost, chengeNewPostText, updateNewMassageText } from "./state";
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
          chengeNewPostText={chengeNewPostText}
          newPostText={state.profilePage.newPostText}
          updateNewMassageText={updateNewMassageText}
          newMassageText= {state.messagePage.newMassageText}
        />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

export default rerenderEntireTree;
