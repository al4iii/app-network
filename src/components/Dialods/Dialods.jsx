import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dialods.module.css";

const DialodItem = (props) => {
  return (
    <div className={styles.dialog + " " + props.active}>
      <NavLink to={`/dialogs/${props.id}`} className={styles.dialog}>
        {props.name}
      </NavLink>
    </div>
  );
};
const MessageItem = (props) => {
  return (
    <div className={styles.messages}>
      <div className={styles.message}>{props.message} </div>
    </div>
  );
};

const Dialods = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.items}>
        <DialodItem name={"Dima"} id={1} active={styles.active} />
        <DialodItem name={"Alina"} id={2} />
        <DialodItem name={"Ninja"} id={3} />
        <DialodItem name={"Spider-man"} id={4} />
      </div>
      <div>
        <MessageItem message={"hello"} />
        <MessageItem message={"How are you"} />
        <MessageItem message={"yoyo"} />
        <MessageItem message={"hello-man "} />
      </div>
      <div className={styles.textarea}>
        <textarea></textarea>
        <div>
          <button className={styles.button}>send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialods;
