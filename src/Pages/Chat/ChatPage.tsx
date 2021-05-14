import { Button, Input } from "antd";
import styles from "./../Chat/ChatPage.module.css";
import React, { useEffect, useState } from "react";
import Avatar from "antd/lib/avatar/avatar";
import { NavLink } from "react-router-dom";
import { MessageType } from "../../API/chat";
import { useDispatch, useSelector } from "react-redux";
import { sendMessages, startMessagesLintening, stopMessagesLintening } from "../../redux/chat-reduser";
import { AppStateType } from "../../redux/redux-store";
const { TextArea } = Input;

export const ChatPage: React.FC = () => {
  return (
    <div>
      <Chat />
    </div>
  );
};

const Chat: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startMessagesLintening());
    return () => {
      dispatch(stopMessagesLintening());
    };
  }, []);
  return (
    <div>
      <Messages />
      <AddMessageForm />
    </div>
  );
};

const Messages: React.FC<{}> = ({}) => {
  const messages = useSelector((state: AppStateType) => state.chat.messages);
  return (
    <div className={styles.messeges}>
      {messages.map((m, index) => (
        <Message key={index} message={m} />
      ))}
    </div>
  );
};

const Message: React.FC<{ message: MessageType }> = ({ message }) => {
  return (
    <div>
      <div>
        <NavLink to={`/profile/${message.userId}`}>
          <Avatar size={40} src={message.photo} />
        </NavLink>
        {message.message}
      </div>
      <div>{message.userName}</div>
      <hr />
    </div>
  );
};

const AddMessageForm: React.FC<{}> = ({}) => {
  let [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const onChange = (e: any) => {
    setMessage(e.target.value);
  };
  const sendMessageHendler = () => {
    if (!message) {
      return;
    }
    dispatch(sendMessages(message));
    setMessage("");
  };
  return (
    <div className={styles.textarea}>
      <TextArea
        rows={3}
        onChange={onChange}
        placeholder="Enter your massage"
        value={message}
      />
      <div>
        <Button
          type="primary"
          className={styles.button}
          onClick={sendMessageHendler}
          disabled={false}
        >
          Send
        </Button>
      </div>
    </div>
  );
};
