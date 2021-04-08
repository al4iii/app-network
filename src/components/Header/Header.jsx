import React from "react";
import styles from "./Header.module.css";
import logo from "./../../img/Go-Logo.png";
import user from "./../../img/user-male.png";
import { NavLink } from "react-router-dom";

const Header = ({ isAuth, profilePhoto, login, logout }) => {
  return (
    <div className={styles.header}>
      <NavLink to={"/profile"} className={styles.img}>
        <img src={logo} className={styles.img} />
      </NavLink>
      <div className={styles.login_block}>
        {isAuth ? (
          <div className={styles.auth}>
            <img src={profilePhoto || user} alt="profilePhoto" className={styles.profilePhoto} />
            {login}
            <button onClick={logout} className={styles.button}>
              Log out
            </button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
