import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../../img/Go-Logo.png";
import styles from "./Header.module.css";

const Headers = () => {
  return (
    <div className={styles.header}>
      <NavLink to={"/profile"} className={styles.img}>
        <img src={logo} className={styles.img} />
      </NavLink>
    </div>
  );
};

export default Headers;
