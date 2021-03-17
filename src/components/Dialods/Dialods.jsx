import React from "react";
import styles from "./Dialods.module.css";

const Dialods = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.items}>
        <div className={styles.dialog + " " + styles.active}>Dima </div>
        <div className={styles.dialog}>Alina </div>
        <div className={styles.dialog}>Ninja </div>
        <div className={styles.dialog}>Spider-man </div>
      </div>
      <div className={styles.messages}>
        <div className={styles.message}>hello </div>
        <div className={styles.message}>How are you </div>
        <div className={styles.message}>yoyo </div>
        <div className={styles.message}>hello-man </div>
      </div>
    </div>
  );
};

export default Dialods;
