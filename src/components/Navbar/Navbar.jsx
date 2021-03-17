import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.link}>
        <NavLink to="/profile" activeClassName={styles.active}>
          Profile
        </NavLink>
      </div>
      <div className={styles.link}>
        <NavLink to="/dialods" activeClassName={styles.active}>
          Massages
        </NavLink>
      </div>
      <div className={styles.link}>
        <NavLink to="/users" activeClassName={styles.active}>
          Users{" "}
        </NavLink>
      </div>
      <div className={styles.link}>
        <NavLink to="/music" activeClassName={styles.active}>
          Music
        </NavLink>
      </div>
      <div className={styles.link}>
        <NavLink to="/news" activeClassName={styles.active}>
          News
        </NavLink>
      </div>
      <div className={styles.link}>
        <NavLink to="/setting" activeClassName={styles.active}>
          Setting
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
