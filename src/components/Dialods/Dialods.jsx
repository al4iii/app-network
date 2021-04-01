import React from "react";
import styles from "./Dialods.module.css";
import Message from "./Message/Message";
import DialodItem from "./DialodItem/DialodItem";
import Button from "../../common/Button/Button";
import { Redirect } from "react-router";
import withAuthRedirect from "../HOC/withAuthRedirect";
import { Field, reduxForm } from "redux-form";

const Dialods = (props) => {
  let DialogElemenst = props.dialogs.map((d) => (
    <DialodItem name={d.name} key={d.id} styles={d.active} />
  ));
  let messagesElemenst = props.messages.map((m) => (
    <Message
      message={m.message}
      key={m.id}
      myProfilePhoto={props.myProfilePhoto}
    />
  ));
  return (
    <div className={styles.dialogs}>
      <div className={styles.items}>{DialogElemenst}</div>
      <div className={styles.messages}>{messagesElemenst}</div>
      <AddMessegeFormRedux onSubmit={(values)=> props.newMessage(values.newMessageText)}/>
    </div>
  );
};

const AddMessegeForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={styles.textarea}>
        <Field
          component={"textarea"}
          name={"newMessageText"}
          placeholder="enter message"
          className={styles.form}
        />
        <div className={styles.button}>
          <Button text={"Send"} />
        </div>
      </div>
    </form>
  );
};
const AddMessegeFormRedux = reduxForm({ form: "dialogAddMessegeForm" })(
  AddMessegeForm
);

export default Dialods;
