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
import Preloader from "./common/Preloader/Preloader";
import store from "./redux/redux-store";
import "./App.css";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "./redux/auth-reduser";
import { initializeApp } from "./redux/app-reduser";
import { compose } from "redux";
import { Provider } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    this.props.auth();
  }
  render() {
    if (this.props.initialized) {
      return <Preloader />;
    } else {
      return (
        <div className="app">
          <HeaderConteiner />
          <div className="app-wrapper">
            <Navbar />
            <div className={"app-wrapper-content"}>
              <Route
                path="/profile/:userId?"
                render={() => <ProfileConteiner />}
              />
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
    }
  }
}
let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};
let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { auth, initializeApp })
)(App);

 const MainApp = () => {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </React.StrictMode>
    </BrowserRouter>
  );
};

export default MainApp