import React from "react";
import Setting from "./components/Setting/Setting";
import DialodsConteiner from "./components/Dialods/DialodsConteiner";
import ProfileConteiner from "./components/Profile/ProfileContainer";
import { Login } from "./components/Login/Login";
import Preloader from "./common/Preloader/Preloader";
import store, { AppStateType } from "./redux/redux-store";
import withSuspense from "./components/HOC/withSuspense";
import { BrowserRouter, Link, Redirect, Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reduser";
import { compose } from "redux";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
import MyToDoList from "./components/MyToDoList/MyToDoList";
import { UserPage } from "./components/Users/UsersConteiner";
import { Layout, Menu } from "antd";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from "@ant-design/icons";
import { Header } from "./components/Header/Header";
const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;
const News = React.lazy(() => import("./components/News/News"));
const Music = React.lazy(() => import("./components/Music/Music"));

type MapPropsType = ReturnType<typeof mapStateToProps>;
type DispatchPropsType = {
  initializeApp: () => void;
};

class App extends React.Component<MapPropsType & DispatchPropsType> {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (this.props.initialized) {
      return <Preloader />;
    }
    return (
      <Layout>
        <Header />
        <Content style={{ padding: "0 50px" }}>
          <Layout className="site-layout-background" style={{ padding: "24px 0" }} >
            <Sider className="site-layout-background" width={200}>
              <Menu mode="inline" defaultSelectedKeys={["2"]} defaultOpenKeys={["sub1"]} style={{ height: "100%" }} >
                <SubMenu key="sub1" icon={<UserOutlined />} title="My profile">
                  <Menu.Item key="1">
                    <Link to="/profile">Profile</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/dialogs"> Massages </Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="Developers" >
                  <Menu.Item key="3">
                    <Link to="/developers"> Developers </Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<NotificationOutlined />}  title="Other" >
                  <Menu.Item key="9">
                    <Link to="/music">Music</Link>
                  </Menu.Item>
                  <Menu.Item key="10">
                    <Link to="/todolist"> My to do list</Link>
                  </Menu.Item>
                  <Menu.Item key="11">
                    <Link to="/setting"> Setting</Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: "0 100px", minHeight: 280 }}>
              <Switch>
                <Route exact path="/" render={() => <Redirect to={"/profile"} />} />
                <Route path="/profile/:userId?" render={() => <ProfileConteiner />} />
                <Route path="/dialogs" render={() => <DialodsConteiner />} />
                <Route path="/news" render={withSuspense(News)} />
                <Route path="/music" render={withSuspense(Music)} />
                <Route path="/developers" render={() => <UserPage />} />
                <Route path="/setting" render={() => <Setting />} />
                <Route path="/todolist" render={() => <MyToDoList />} />
                <Route path="/login" render={() => <Login />} />
                <Route path="/" render={() => <ProfileConteiner />} />
                <Route path="*" render={() => <div> 404 NOT FOUND </div>} />
              </Switch>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <p> Go © 2021 Created by <a href="https://www.linkedin.com/in/aleksandr-danilin-b351b8201/">al4i</a></p>
        </Footer>
      </Layout>
    );
  }
}

let mapStateToProps = (state: AppStateType) => {
  return {
    initialized: state.app.initialized,
  };
};

let AppContainer = compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

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
