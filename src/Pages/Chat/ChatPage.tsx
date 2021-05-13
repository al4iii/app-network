import { Button, Input } from "antd";
import styles from "./../Chat/ChatPage.module.css";
import React, { useEffect, useState } from "react";
import Avatar from "antd/lib/avatar/avatar";
import { NavLink } from "react-router-dom";
const { TextArea } = Input;

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
  let [wsChanal, setWsChanal] = useState<WebSocket | null>(null);
  useEffect(() => {
    let ws: WebSocket;
    const closeHendler = () => {
      console.log("====> close.WS");
      setTimeout(creacteChanel, 3000);
    };
    function creacteChanel() {
      ws?.removeEventListener("close", closeHendler);
      ws?.close();
      ws = new WebSocket(
        "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
      );
      ws.addEventListener("close", closeHendler);
      setWsChanal(ws);
    }
    creacteChanel();
    return () => {
      ws.removeEventListener("close", closeHendler);
      ws.close();
    };
  }, []);
  return (
    <div>
      <Messages wsChanal={wsChanal} />
      <AddMessageForm wsChanal={wsChanal} />
    </div>
  );
};

const Messages: React.FC<{ wsChanal: WebSocket | null }> = ({ wsChanal }) => {
  const [messages, setMessages] = useState<messageType[]>([]);
  useEffect(() => {
    const messageHendler = (e: MessageEvent) => {
      let newMessages = JSON.parse(e.data);
      setMessages((prevMessages) => [...prevMessages, ...newMessages]);
    };
    wsChanal?.addEventListener("message", messageHendler);
    return () => {
      wsChanal?.removeEventListener("message", messageHendler);
    };
  }, [wsChanal]);
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
        <NavLink to={`/profile/${message.userId}`}>
          <Avatar size={40} src={message.photo}>
            USER
          </Avatar>
        </NavLink>
        {message.message}
      </div>
      <div>{message.userName}</div>
      <hr />
    </div>
  );
};

const AddMessageForm: React.FC<{ wsChanal: WebSocket | null }> = ({
  wsChanal,
}) => {
  let [message, setMessage] = useState("");
  let [isReady, setIsReady] = useState<"pending" | "ready">("pending");

  useEffect(() => {
    const openHendler = () => {
      setIsReady("ready");
    };
    wsChanal?.addEventListener("open", openHendler);
    return () => {
      wsChanal?.removeEventListener("open", openHendler);
    };
  }, [wsChanal]);

  const onChange = (e: any) => {
    setMessage(e.target.value);
  };
  const sendMessage = () => {
    if (!message) {
      return;
    }
    wsChanal?.send(message);
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
          onClick={sendMessage}
          disabled={wsChanal === null || isReady !== "ready"}
        >
          Send
        </Button>
      </div>
    </div>
  );
};
