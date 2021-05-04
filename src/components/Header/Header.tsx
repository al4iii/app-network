import React from "react";
import styles from "./Header.module.css";
import logo from "./../../img/Go-Logo.png";
import user from "./../../img/user-male.png";
import { NavLink } from "react-router-dom";

export type MapPropsType = {
  isAuth: boolean;
  profilePhoto: string;
  login: string | null
} 
export type DispatchPropsType = {
  logout: () => void;
};

const Header:React.FC<MapPropsType & DispatchPropsType> = ({ isAuth, profilePhoto, login, logout }) => {
  return (
    <div className={styles.header}>
      <NavLink to={"/profile"} className={styles.img}>
        <img src={logo} className={styles.img} alt={"logo"}/>
      </NavLink>
      <div className={styles.login_block}>
        {isAuth ? (
          <div className={styles.auth}>
            <img
              src={profilePhoto || user}
              alt="profilePhoto"
              className={styles.profilePhoto}
            />
            {login}
            <button onClick={logout} className={styles.button}>
              Log out
            </button>
          </div>
        ) : (
          <div>
            <NavLink to={"/login"}>Sing In</NavLink>
            <button className={styles.button}>
              <a href="https://social-network.samuraijs.com/signUp">Sing Up</a>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
