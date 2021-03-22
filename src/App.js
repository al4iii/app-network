import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialods from "./components/Dialods/Dialods";
import { Route } from "react-router-dom";
import Users from "./components/Users/Users";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import News from "./components/News/News";

const App = (props) => {
  return (
    <div className="app">
      <Header />
      <div className="app-wrapper">
        <Navbar />
        <div className={"app-wrapper-content"}>
          <Route path="/profile" render={() => ( <Profile state={props.store.profilePage} dispatch={props.dispatch} />)} />
          <Route path="/dialogs" render={() => ( <Dialods state={props.store.dialogsPage} dispatch={props.dispatch} />)} />
          <Route path="/users" render={() => <Users />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/setting" render={() => <Setting />} />
          <Route path="/news" render={() => <News />} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
