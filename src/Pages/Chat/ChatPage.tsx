import { Button, Input } from "antd";
import styles from "./../Chat/ChatPage.module.css";
import React, { useEffect, useState } from "react";
import Avatar from "antd/lib/avatar/avatar";
const { TextArea } = Input;

const wsChanal = new WebSocket(
  "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
);

type messageType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};
export const ChatPage: React.FC = () => {
  return (
    <div>
      <Chat />
    </div>
  );
};

const Chat: React.FC = () => {
  return (
    <div>
      <Messages />
      <AddMessageForm />
    </div>
  );
};

const Messages: React.FC = (props) => {
  const [messages, setMessages] = useState<messageType[]>([]);
  useEffect(() => {
    wsChanal.addEventListener("message", (e: MessageEvent) => {
      let newMessages = JSON.parse(e.data);
      setMessages((prevMessages) => [...prevMessages, ...newMessages]);
    });
  }, []);
  return (
    <div className={styles.messeges}>
      {messages.map((m, index) => (
        <Message key={index} message={m} />
      ))}
    </div>
  );
};

const Message: React.FC<{ message: messageType }> = ({ message }) => {
  return (
    <div>
      <div>
        <Avatar size={40} src={message.photo}>
          USER
        </Avatar>
        {message.message}
      </div>
      <div>{message.userName}</div>
      <hr />
    </div>
  );
};

const AddMessageForm = () => {
  const [message, setMessage] = useState("");
  const onChange = (e: any) => {
    setMessage(e.target.value);
  };
  const sendMessage = () => {
    if (!message) {
      return;
    }
    wsChanal.send(message);
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
        <Button type="primary" className={styles.button} onClick={sendMessage}>
          Send
        </Button>
      </div>
    </div>
  );
};
