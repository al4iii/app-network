import React from "react";
import styles from "./Dialods.module.css";
import Message from "./Message/Message";
import DialodItem from "./DialodItem/DialodItem";
import Button from "./Button/Button";
import { Redirect } from "react-router";

const Dialods = (props) => {
  let DialogElemenst = props.dialogs.map((d) => (
    <DialodItem name={d.name} key={d.id} styles={d.active} />
  ));
  let messagesElemenst = props.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));
  const onNewMessage = () => props.newMessage();
  const onMessageChange = (e) => props.messageChange(e.target.value);
  if (!props.isAuth) return <Redirect to="login" />;
  
  return (
    <div className={styles.dialogs}>
      <div className={styles.items}>{DialogElemenst}</div>
      <div className={styles.messages}>{messagesElemenst}</div>
      <div className={styles.textarea}>
        <textarea
          className={styles.form}
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
