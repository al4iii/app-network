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
  let dialogData = [
    { id: 1, name: "Dima" },
    { id: 2, name: "Alina" },
    { id: 3, name: "Ninja" },
    { id: 4, name: "Spider-man" },
  ];
  let messagesData = [
    { id: 1, message: "hello" },
    { id: 2, message: "How are you" },
    { id: 3, message: "yoyo" },
    { id: 4, message: "hello-man " },
  ];
  return (
    <div className={styles.dialogs}>
      <div className={styles.items}>
        <DialodItem name={dialogData[0].name} id={dialogData[0].id}
          active={styles.active}
        />
        <DialodItem name={dialogData[1].name} id={dialogData[1].id} />
        <DialodItem name={dialogData[2].name} id={dialogData[2].id} />
        <DialodItem name={dialogData[3].name} id={dialogData[3].id} />
      </div>
      <div>
        <MessageItem message={messagesData[0].message} />
        <MessageItem message={messagesData[1].message} />
        <MessageItem message={messagesData[2].message} />
        <MessageItem message={messagesData[3].message} />
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
