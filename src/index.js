import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import state, {
  addMessage,
  addPost,
  chengeNewPostText,
  subscribe,
  updateNewMassageText,
} from "./redux/state";
import App from "./App";

const rerenderEntireTree = (state) => {
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
          newMassageText={state.messagePage.newMassageText}
        />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById("root")
  );
};
rerenderEntireTree(state);

subscribe(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
