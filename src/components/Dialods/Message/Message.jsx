import React from "react";
import styles from "./Message.module.css";

const Message = ({ message, myProfilePhoto }) => {
  return (
    <div className={styles.messages}>
      <div className={styles.message}>{message}</div>
      <div className={styles.avatar}>
        <img src={myProfilePhoto} alt="avatar" />
      </div>
    </div>
  );
};

export default Message;
