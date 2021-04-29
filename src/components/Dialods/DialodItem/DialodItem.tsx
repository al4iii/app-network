import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./DialodItem.module.css";

type PropsType={
  id: number
  name: string
}

const DialodItem:React.FC<PropsType> = ({ id, name }) => {
  return (
    <div className={styles.dialog}>
      <NavLink to={`/dialogs/${id}`} className={styles.dialog}>
        {name}
      </NavLink>
    </div>
  );
};

export default DialodItem;
