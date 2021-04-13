import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Setting from "./components/Setting/Setting";
import DialodsConteiner from "./components/Dialods/DialodsConteiner";
import ProfileConteiner from "./components/Profile/ProfileContainer";
import HeaderConteiner from "./components/Header/HeaderConteiner";
import Login from "./components/Login/Login";
import Preloader from "./common/Preloader/Preloader";
import store from "./redux/redux-store";
import withSuspense from "./components/HOC/withSuspense";
import { BrowserRouter,  Redirect,  Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reduser";
import { compose } from "redux";
import { Provider } from "react-redux";
import "./App.css";
const News = React.lazy(() => import("./components/News/News"));
const Music = React.lazy(() => import("./components/Music/Music"));
const UsersConteiner = React.lazy(() => import("./components/Users/UsersConteiner"));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();   
  }
  render() {
    if (this.props.initialized) {
      return <Preloader />;
    } 
      return (
        <div className="app">
          <HeaderConteiner />
          <div className="app-wrapper">
            <Navbar />
            <div className={"app-wrapper-content"}>      
            <Switch> 
                <Route exact path="/" render={() => <Redirect to={'/profile'}/>} />               
                <Route path="/profile/:userId?" render={() => <ProfileConteiner />} />
                <Route path="/dialogs" render={() => <DialodsConteiner />} />
                <Route path="/news" render={withSuspense(News)} />
                <Route path="/music" render={withSuspense(Music)} />
                <Route path="/users" render={withSuspense(UsersConteiner)} />
                <Route path="/setting" render={() => <Setting />} />
                <Route path="/login" render={() => <Login />} />  
                <Route path="/" render={() => <ProfileConteiner />} />
                <Route path="*" render={() => <div> 404 NOT FOUND</div>} />  
            </Switch>                                   
            </div>
          </div>
          <Footer />
        </div>
      );
    }  
}

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

let AppContainer = compose( withRouter, connect(mapStateToProps, { initializeApp }))(App);

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

export default MainApp;
