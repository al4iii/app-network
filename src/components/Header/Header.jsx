import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../../img/Go-Logo.png";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <NavLink to={"/profile"} className={styles.img}>
        <img src={logo} className={styles.img} />
      </NavLink>
      <div className={styles.login_block}>
        {props.isAuth ? <div className ={styles.auth}><img src={props.profilePhoto} alt="" className ={styles.profilePhoto}/> {props.login} </div>: <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </div>
  );
};

export default Header;
