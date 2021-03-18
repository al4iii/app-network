import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let posts = [
  { id: 1, message: "Hi, how are you?", like: 1 },
  { id: 2, message: "Hi!", like: 55 },
  { id: 3, message: "I am sexy!!", like: 144 },
  { id: 4, message: "Have a good day", like: 15 },
  { id: 5, message: "It my first post!!", like: 177 },
];
let dialogs = [
  { id: 1, name: "Dima", active: "active" },
  { id: 2, name: "Alina", active: " " },
  { id: 3, name: "Ninja", active: " " },
  { id: 4, name: "Spider-man", active: " " },
];
let messages = [
  { id: 1, message: "hello" },
  { id: 2, message: "How are you" },
  { id: 3, message: "yoyo" },
  { id: 4, message: "hello-man " },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
