import { Button, Input } from "antd";
import styles from "./../Chat/ChatPage.module.css";
import React, { useEffect, useRef, useState } from "react";
import Avatar from "antd/lib/avatar/avatar";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendMessages, startMessagesLintening, stopMessagesLintening } from "../../redux/chat-reduser";
import { AppStateType } from "../../redux/redux-store";
import { MessageChatAPIType } from "../../API/chatAPI";
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
  const status = useSelector((state: AppStateType) => state.chat.status);
  useEffect(() => {
    dispatch(startMessagesLintening());
    return () => {
      dispatch(stopMessagesLintening());
    };
  }, []);
  return (
    <div>
      {status === "error" && <div>Some error. Please restast page</div>}
      <Messages />
      <AddMessageForm />
    </div>
  );
};

const Messages: React.FC<{}> = ({}) => {  
  const messagesAnchorRef = useRef<HTMLDivElement>(null) 
  const messages = useSelector((state: AppStateType) => state.chat.messages);
  const [isAutoScroll, setIsAutoScroll] = useState(false)
  const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    let element = e.currentTarget;
    if ( Math.abs( element.scrollHeight - element.scrollTop - element.clientHeight ) < 200) {
      !isAutoScroll && setIsAutoScroll(true);
    } else {
      isAutoScroll && setIsAutoScroll(false);
    }
  };
  useEffect(()=> {
    if(isAutoScroll){
      messagesAnchorRef.current?.scrollIntoView({behavior:"smooth"})
    }    
  }, [messages])
  return (
    <div className={styles.messeges} onScroll={scrollHandler}>
      {messages.map((m, index) => (
        <Message key={m.id} message={m} />
      ))}
      <div ref={messagesAnchorRef}></div>
    </div>
  );
};

const Message: React.FC<{ message: MessageChatAPIType }> = React.memo(({ message }) => {
  console.log("message")
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
  }
);

const AddMessageForm: React.FC<{}> = ({}) => {
  let [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const status = useSelector((state: AppStateType) => state.chat.status)
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
          disabled={status !== "ready"}
        >
          Send
        </Button>
      </div>
    </div>
  );
};
