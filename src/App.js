import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import News from "./components/News/News";
import DialodsConteiner from "./components/Dialods/DialodsConteiner";
import UsersConteiner from "./components/Users/UsersConteiner";
import ProfileConteiner from "./components/Profile/ProfileContainer";
import HeaderConteiner from "./components/Header/HeaderConteiner";
import Login from "./components/Login/Login";
import { Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <HeaderConteiner />
      <div className="app-wrapper">
        <Navbar />
        <div className={"app-wrapper-content"}>
          <Route path="/profile/:userId?" render={() => <ProfileConteiner />} />
          <Route path="/dialogs" render={() => <DialodsConteiner />} />
          <Route path="/users" render={() => <UsersConteiner />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/setting" render={() => <Setting />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
