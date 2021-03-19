import React from "react";
import styles from "./Dialods.module.css";
import Message from "./Message/Message";
import DialodItem from "./DialodItem/DialodItem";
import Button from "./Button/Button";

const Dialods = (props) => {
  let DialogElemenst = props.dialogs.map((d) => (
    <DialodItem name={d.name} key={d.id} styles={d.active} />
  ));
  let messageslemenst = props.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));
  let newMessages = React.createRef();
  const newMessage = () => props.addMessage(newMessages.current.value);
  const onMassageChecge = () =>  props.updateNewMassageText(newMessages.current.value);
  return (
    <div className={styles.dialogs}>
      <div className={styles.items}>{DialogElemenst}</div>
      <div className={styles.message}>{messageslemenst}</div>
      <div className={styles.textarea}>
        <textarea
          ref={newMessages}
          placeholder="enter message"
          onChange={onMassageChecge}
          value={props.newMassageText}
        />
        <div className={styles.button}>
          <Button text={"Send"} onClick={newMessage} />
        </div>
      </div>
    </div>
  );
};

export default Dialods;
