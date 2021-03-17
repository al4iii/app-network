import React from "react";
import logo from "./../../img/logo.png";
import styles from "./Header.module.css";

const Headers = () => {
  return (
    <div className={styles.header}>
      <img src={logo} className={styles.img} />
    </div>
  );
};

export default Headers;
