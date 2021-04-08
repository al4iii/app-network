import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./DialodItem.module.css";

const DialodItem = ({ id, name }) => {
  return (
    <div className={styles.dialog}>
      <NavLink to={`/dialogs/${id}`} className={styles.dialog}>
        {name}
      </NavLink>
    </div>
  );
};

export default DialodItem;
