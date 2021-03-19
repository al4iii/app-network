import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/state";
import App from "./App";

const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          stare={store.state}
          posts={store._state.profilePage.posts}
          dialogs={store._state.messagePage.dialogs}
          messages={store._state.messagePage.messages}
          addPost={store.addPost.bind(store)}
          addMessage={store.addMessage.bind(store)}
          chengeNewPostText={store.chengeNewPostText.bind(store)}
          newPostText={store._state.profilePage.newPostText}
          updateNewMassageText={store.updateNewMassageText.bind(store)}
          newMassageText={store._state.messagePage.newMassageText}
        />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById("root")
  );
};
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
