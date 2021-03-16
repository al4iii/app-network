import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <a href="#">ProFile</a>
      </div>
      <div>
        <a href="#">Users</a>
      </div>
      <div>
        <a href="#">Music</a>
      </div>
      <div>
        <a href="#">News</a>
      </div>
      <div>
        <a href="#">Setting</a>
      </div>
    </nav>
  );
};

export default Navbar;
