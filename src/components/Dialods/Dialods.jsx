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
  let dialogs = [
    { id: 1, name: "Dima", active: "active" },
    { id: 2, name: "Alina", active: " " },
    { id: 3, name: "Ninja", active: " " },
    { id: 4, name: "Spider-man", active: " " },
  ];
  let messages = [
    { id: 1, message: "hello" },
    { id: 2, message: "How are you" },
    { id: 3, message: "yoyo" },
    { id: 4, message: "hello-man " },
  ];
  let DialogElemenst = dialogs.map((d) => ( <DialodItem name={d.name} key={d.id} styles={d.active} /> ));
  let messageslemenst = messages.map((m) => ( <MessageItem message={m.message} key={m.id} /> ));
  return (
    <div className={styles.dialogs}>
      <div className={styles.items}>{DialogElemenst}</div>
      <div>{messageslemenst}</div>
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
