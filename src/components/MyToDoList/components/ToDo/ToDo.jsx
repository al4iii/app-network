import React from "react";
import styles from "./ToDo.module.css";

const ToDo = (props) => {
  return (
    <div className={styles.to_do}>
      {props.task}
      <button
        className={styles.right}
        onClick={() => props.onDelete(props.index)}
      ></button>
    </div>
  );
};

export default ToDo;
