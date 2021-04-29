import React from "react";
import styles from "./Message.module.css";

type PropsType={
  message: string
  myProfilePhoto: string
}

const Message: React.FC<PropsType> = ({ message, myProfilePhoto }) => {
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
