import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import Users from "./components/Users/Users";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import News from "./components/News/News";
import DialodsConteiner from "./components/Dialods/DialodsConteiner";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app-wrapper">
        <Navbar />
        <div className={"app-wrapper-content"}>
          <Route path="/profile" render={() => <Profile />} />
          <Route path="/dialogs" render={() => <DialodsConteiner />} />
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
