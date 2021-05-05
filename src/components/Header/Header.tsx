import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar, Button, Col, Image, Layout, Menu, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLogin,
  selectAuth,
  selectAvatar,
} from "./../../redux/auth-selector";
import { logout } from "../../redux/auth-reduser";

export type MapPropsType = {};

export const Header: React.FC<MapPropsType> = (props) => {
  const isAuth = useSelector(selectAuth);
  const login = useSelector(selectLogin);
  let avatar = useSelector(selectAvatar);
  const dispatch = useDispatch();
  const logoutCallback = () => {
    dispatch(logout());
  };
  const { Header } = Layout;
  return (
    <Header className="header">
      <Row>
        <Col span={18}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">
              <Link to="/developers">Developers</Link>
            </Menu.Item>
          </Menu>
        </Col>
        {isAuth ? (
          <>
            <Col span={1} >
              <img src={avatar || ""} width="32px" />            
            </Col>
            <Col span={5}>
              <Button onClick={logoutCallback}>Log out</Button>
            </Col>
          </>
        ) : (
          <Col span={6}>
            <Button>
              <Link to={"/login"}>Login</Link>
            </Button>
          </Col>
        )}
      </Row>
    </Header>
  );

  /*  <header className={s.header}>
          <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' />

          <div className={s.loginBlock}>
              { props.isAuth
                  ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                  : <NavLink to={'/login'}>Login</NavLink> }
          </div>
      </header>*/
};
