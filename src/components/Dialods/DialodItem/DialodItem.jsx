import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./DialodItem.module.css";

const DialodItem = (props) => {
  return (
    <div className={styles.dialog}>
      <NavLink to={`/dialogs/${props.id}`} className={styles.dialog}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialodItem;
