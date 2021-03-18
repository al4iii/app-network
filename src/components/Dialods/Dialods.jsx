import React from "react";
import styles from "./Dialods.module.css";
import Message from "./Message/Message";
import DialodItem from "./DialodItem/DialodItem";

const Dialods = () => {
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
  let messageslemenst = messages.map((m) => ( <Message message={m.message} key={m.id} /> ));
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
