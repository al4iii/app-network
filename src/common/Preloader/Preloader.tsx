import React from "react";
import styles from "./Preloader.module.css";
import loader from "./../../img/loader.svg";

type PropsType={}

const Preloader:React.FC<PropsType> = () => {
  return (
    <div className={styles.loader}>
      <img src={loader} alt={"loader"}/>
    </div>
  );
};

export default Preloader;
