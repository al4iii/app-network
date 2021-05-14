import { Button, Input } from "antd";
import styles from "./../Chat/ChatPage.module.css";
import React, { useEffect, useState } from "react";
import Avatar from "antd/lib/avatar/avatar";
import { NavLink } from "react-router-dom";
<<<<<<< HEAD
import { MessageType } from "../../API/chat";
import { useDispatch, useSelector } from "react-redux";
import { sendMessages, startMessagesLintening, stopMessagesLintening } from "../../redux/chat-reduser";
import { AppStateType } from "../../redux/redux-store";
const { TextArea } = Input;


=======
const { TextArea } = Input;

type messageType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};
>>>>>>> 4c1f8e80e6bbae237ae8070f4b2dc1bcfd222893
export const ChatPage: React.FC = () => {
  return (
    <div>
      <Chat />
    </div>
  );
};

<<<<<<< HEAD
const Chat: React.FC = () => {  
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(startMessagesLintening())
      return()=> {
        dispatch(stopMessagesLintening())
      }
    }, [])    
 return (
    <div>
      <Messages  />
      <AddMessageForm />
=======
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
>>>>>>> 4c1f8e80e6bbae237ae8070f4b2dc1bcfd222893
    </div>
  );
};

<<<<<<< HEAD
const Messages: React.FC<{}> = ({}) => {
  const messages = useSelector((state: AppStateType) => state.chat.messages);
=======
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
>>>>>>> 4c1f8e80e6bbae237ae8070f4b2dc1bcfd222893
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

<<<<<<< HEAD
const AddMessageForm: React.FC<{  }> = ({ }) => {
  let [message, setMessage] = useState("");
  let [isReady, setIsReady] = useState<"pending" | "ready">("pending");
  const dispatch = useDispatch()  
=======
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

>>>>>>> 4c1f8e80e6bbae237ae8070f4b2dc1bcfd222893
  const onChange = (e: any) => {
    setMessage(e.target.value);
  };
  const sendMessageHendler = () => {
    if (!message) {
      return;
    }
<<<<<<< HEAD
    dispatch(sendMessages(message))
=======
    wsChanal?.send(message);
>>>>>>> 4c1f8e80e6bbae237ae8070f4b2dc1bcfd222893
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
<<<<<<< HEAD
          onClick={sendMessageHendler}
          disabled={false}
=======
          onClick={sendMessage}
          disabled={wsChanal === null || isReady !== "ready"}
>>>>>>> 4c1f8e80e6bbae237ae8070f4b2dc1bcfd222893
        >
          Send
        </Button>
      </div>
    </div>
  );
};
