import React from "react";
import styles from "./Dialods.module.css";
import Message from "./Message/Message";
import DialodItem from "./DialodItem/DialodItem";

const Dialods = (props) => {
  let DialogElemenst = props.dialogs.map((d) => (
    <DialodItem name={d.name} key={d.id} styles={d.active} />
  ));
  let messageslemenst = props.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));
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
