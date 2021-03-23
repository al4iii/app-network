import React from "react";
import styles from "./Dialods.module.css";
import Message from "./Message/Message";
import DialodItem from "./DialodItem/DialodItem";
import Button from "./Button/Button";

const Dialods = (props) => {
  debugger
  let DialogElemenst = props.dialogs.map((d) => (
    <DialodItem name={d.name} key={d.id} styles={d.active} />
  ));
  let messagesElemenst = props.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));
  const onNewMessage = () => props.newMessage();
  const onMessageChange = (e) => props.messageChange(e.target.value);
  return (
    <div className={styles.dialogs}>
      <div className={styles.items}>{DialogElemenst}</div>
      <div className={styles.messages}>{messagesElemenst}</div>
      <div className={styles.textarea}>
        <textarea
          placeholder="enter message"
          onChange={onMessageChange}
          value={props.newMessageText}
        />
        <div className={styles.button}>
          <Button text={"Send"} onClick={onNewMessage} />
        </div>
      </div>
    </div>
  );
};

export default Dialods;
