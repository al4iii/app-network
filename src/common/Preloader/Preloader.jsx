import React from "react";
import styles from "./Preloader.module.css";
import loader from "./../../img/loader.svg";

const Preloader = () => {
  return (
    <div className={styles.loader}>
      <img src={loader} />
    </div>
  );
};

export default Preloader;
