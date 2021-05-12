import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Layout, Menu, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { selectLogin, selectAuth, selectAvatar,} from "./../../redux/auth-selector";
import { logout } from "../../redux/auth-reduser";
import Text from "antd/lib/typography/Text";

export type MapPropsType = {};

export const Header: React.FC<MapPropsType> = () => {
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
        <Col className="gutter-row" span={4} offset={1}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">
              <Link to="/developers">Developers</Link>
            </Menu.Item>
          </Menu>
        </Col>
        {isAuth ? (
          <>
            <Col className="gutter-row" span={1} offset={11}>
              <img src={avatar || ""} width="32px" alt={"avatar"}/>              
            </Col>
            <Col className="gutter-row" span={2}>              
              <Text type="warning" keyboard >{login} </Text>
            </Col>
            <Col className="gutter-row" span={2}>
              <Button onClick={logoutCallback}>Log out</Button>
            </Col>
          </>
        ) : (
          <Col className="gutter-row" span={6}>
            <Button>
              <Link to={"/login"}>Login</Link>
            </Button>
          </Col>
        )}
      </Row>
    </Header>
  );
};
