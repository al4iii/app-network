import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialods from "./components/Dialods/Dialods";
import { BrowserRouter, Route } from "react-router-dom";
import Users from "./components/Users/Users";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import News from "./components/News/News";

const App = () => {
  return (
    <BrowserRouter>      
      <div className="app">
        <Header />
        <div className="app-wrapper">
          <Navbar />
          <div className={"app-wrapper-content"}>
            <Route path="/profile" component={Profile} />
            <Route path="/dialogs" component={Dialods} />
            <Route path="/users" component={Users} />
            <Route path="/music" component={Music} />
            <Route path="/setting" component={Setting} />
            <Route path="/news" component={News} />
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
