import React from "react";
import styles from "./Dialods.module.css";
import Message from "./Message/Message";
import DialodItem from "./DialodItem/DialodItem";
import Button from "../../common/Button/Button";
import { InjectedFormProps, reduxForm } from "redux-form";
import { createField, Textarea } from "../../common/FormsControls/FormsControls";
import { DialogType, MessagesType } from "../../types/types";
import { maxLengthCreater, reaquired } from "../../helpers/validators/validators";

type OwnProps = {
  dialogs: Array<DialogType>;
  messages: Array<MessagesType>;
  myProfilePhoto: string;
  newMessages: (newMessageText: string) => void;
 
};

const Dialods: React.FC<OwnProps>  = ({ dialogs, messages, myProfilePhoto, newMessages }) => {
  let DialogElemenst = dialogs.map((d) => (<DialodItem name={d.name} key={d.id} id={d.id} />));
  let messagesElemenst = messages.map((m) => (<Message message={m.message} key={m.id} myProfilePhoto={myProfilePhoto} />));
  return (
    <div className={styles.dialogs}>
      <div className={styles.items}>{DialogElemenst}</div>
      <div className={styles.messages}>{messagesElemenst}</div>
      <AddMessegeFormRedux
        onSubmit={(values: {newMessageText: string}) => newMessages(values.newMessageText)}
      />
    </div>
  );
};

export type AddMessegeType = {
  newMessageText: string; 
};
const maxLength100 = maxLengthCreater(10);
export type AddMessegeTypeKeys = keyof AddMessegeType
type PropsType ={}
const AddMessegeForm: React.FC< InjectedFormProps<AddMessegeType, PropsType> & PropsType> = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className={styles.textarea }>
      <div>
        {createField<AddMessegeTypeKeys>("enter message","newMessageText",[reaquired, maxLength100],Textarea )}
        <div className={styles.button}>
          <Button text={"Send"} />
        </div>
      </div>
    </form>
  );
};

const AddMessegeFormRedux = reduxForm<AddMessegeType, PropsType> ({ form: "dialogAddMessegeForm" })( AddMessegeForm );

export default Dialods;
