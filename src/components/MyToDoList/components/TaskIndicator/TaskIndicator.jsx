import React from "react";
import styles from "./TaskIndicator.module.css";

const TaskIndicator = (props) => {
  return (
    <div className={styles.header}>
      <h3 className={styles.h3}>
        {`You have ${props.number} ${props.number === 1 ? " task" : " tasks"}`}
      </h3>
    </div>
  );
};

export default TaskIndicator;
