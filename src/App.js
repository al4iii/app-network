import React from "react";
import "./App.css";
import logo from "./img/logo.png";
import illustration from "./img/illustration.jpg";

const App = () => {
  return (
    <div className="app-wrapper">
      <headers className="header">
        <img src={logo} />
      </headers>
      <nav className="nav">
        <div>
          <a href="#">ProFile</a>
        </div>
        <div>
          <a href="#">Users</a>
        </div>
        <div>
          <a href="#">Music</a>
        </div>
        <div>
          <a href="#">News</a>
        </div>
        <div>
          <a href="#">Setting</a>
        </div>
      </nav>
      <div className="content">
        <img src={illustration} />
        <div>ava + desc</div>
        <div>
          My post
          <div>
            new post:
            <div>post 1</div>
            <div>post 2</div>
            <div>post 3</div>
          </div>
        </div>
      </div>
      <footer className="footer"> footer </footer>
    </div>
  );
};

export default App;
