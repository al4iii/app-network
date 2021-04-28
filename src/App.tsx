import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Setting from "./components/Setting/Setting";
import DialodsConteiner from "./components/Dialods/DialodsConteiner";
import ProfileConteiner from "./components/Profile/ProfileContainer";
import HeaderConteiner from "./components/Header/HeaderConteiner";
import Login from "./components/Login/Login";
import Preloader from "./common/Preloader/Preloader";
import store, { AppStateType } from "./redux/redux-store";
import withSuspense from "./components/HOC/withSuspense";
import { BrowserRouter,  Redirect,  Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reduser";
import { compose } from "redux";
import { Provider } from "react-redux";
import "./App.css";
import MyToDoList from "./components/MyToDoList/MyToDoList";
import UsersConteiner from "./components/Users/UsersConteiner";
const News = React.lazy(() => import("./components/News/News"));
const Music = React.lazy(() => import("./components/Music/Music"));

type MapPropsType= ReturnType<typeof mapStateToProps>
type DispatchPropsType= {
  initializeApp: () => void
}

class App extends React.Component<MapPropsType & DispatchPropsType> {  
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
                <Route path="/users" render={()=> <UsersConteiner/> } />
                <Route path="/setting" render={() => <Setting />} />
                <Route path="/todolist" render={() => <MyToDoList />} />
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

let mapStateToProps = (state:AppStateType) => {
  return {
    initialized: state.app.initialized,
  };
};

let AppContainer = compose<React.ComponentType>( withRouter, connect(mapStateToProps, { initializeApp }))(App);

const MainApp: React.FC = () => {
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
