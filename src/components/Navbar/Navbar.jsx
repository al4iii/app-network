import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_link}>
        <a href="#" className={styles.navbar_a}>
          ProFile
        </a>
      </div>
      <div className={styles.navbar_link}>
        <a href="#" className={styles.navbar_a}>
          Users
        </a>
      </div>
      <div className={styles.navbar_link}>
        <a href="#" className={styles.navbar_a}>
          Music
        </a>
      </div>
      <div className={styles.navbar_link}>
        <a href="#" className={styles.navbar_a}>
          News
        </a>
      </div>
      <div className={styles.navbar_link}>
        <a href="#" className={styles.navbar_a}>
          Setting
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
