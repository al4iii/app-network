import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import profile from "./../../img/profile.png";
import message from "./../../img/imessage.png";
import users from "./../../img/users.png";
import music from "./../../img/music.png";
import news from "./../../img/news.png";
import setting from "./../../img/settings.png";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.link}>
        <NavLink to="/profile" activeClassName={styles.active}>
          <img src={profile} alt="" className={styles.icon} />
          Profile
        </NavLink>
      </div>
      <div className={styles.link}>
        <NavLink to="/dialods" activeClassName={styles.active}>
          <img src={message} alt="" className={styles.icon} />
          Massages
        </NavLink>
      </div>
      <div className={styles.link}>
        <NavLink to="/users" activeClassName={styles.active}>
          <img src={users} alt="" className={styles.icon} />
          Users{" "}
        </NavLink>
      </div>
      <div className={styles.link}>
        <NavLink to="/music" activeClassName={styles.active}>
          <img src={music} alt="" className={styles.icon} />
          Music
        </NavLink>
      </div>
      <div className={styles.link}>
        <NavLink to="/news" activeClassName={styles.active}>
          <img src={news} alt="" className={styles.icon} />
          News
        </NavLink>
      </div>
      <div className={styles.link}>
        <NavLink to="/setting" activeClassName={styles.active}>
          <img src={setting} alt="" className={styles.icon} />
          Setting
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
