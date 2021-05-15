let subscribers = {
  "messages-receive": [] as MessagesReceivedSubscriberType[],
  "status-changed": [] as StatusChengedSubscriberType[],
} 
let ws: WebSocket | null = null;
type eventsNamesType = "messages-receive" | "status-changed";
const closeHendler = () => {
  console.log("====> close.WS");
  notyfySubsribersAboutStatus("panding")
  setTimeout(creacteChanel, 3000);
};
const notyfySubsribersAboutStatus=(status: StatusType)=>{
  subscribers["status-changed"].forEach(s=> s(status))
}
const creacteChanel = () => {
  cleanUp();
  ws?.close();
  ws = new WebSocket(
    "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
  );
  notyfySubsribersAboutStatus("panding")
  ws.addEventListener("close", closeHendler);
  ws.addEventListener("message", messageHendler);
  ws.addEventListener("open", openHendler);
  ws.addEventListener("error", errorHendler );
};

const cleanUp = () => {
  ws?.removeEventListener("close", closeHendler);
  ws?.removeEventListener("message", messageHendler);
  ws?.removeEventListener("open", openHendler);
  ws?.removeEventListener("error", errorHendler );
};

const messageHendler = (e: MessageEvent) => {
  let newMessages = JSON.parse(e.data);
  subscribers["messages-receive"].forEach((s) => s(newMessages));
};
const openHendler = () => {
  notyfySubsribersAboutStatus("ready")
};
const errorHendler = () => {
  notyfySubsribersAboutStatus("error")
  console.error("RESTART PAGE")
};

export const chatAPI = {
  subscribe(evantName: eventsNamesType, callback: MessagesReceivedSubscriberType | StatusChengedSubscriberType ) {
    // @ts-ignore
    subscribers[evantName].push(callback);
    return () => {
      // @ts-ignore
      subscribers[evantName] = subscribers[evantName].filter((s) => s !== callback);
    };
  },
  unsubscribe(evantName: eventsNamesType, callback: MessagesReceivedSubscriberType | StatusChengedSubscriberType) {
    // @ts-ignore
    subscribers[evantName] = subscribers[evantName].filter((s) => s !== callback);
  },
  sendMessage(message: string) {
    ws?.send(message);
  },
  start() {
    creacteChanel();
  },
  stop() {
    subscribers["messages-receive"] = [];
    subscribers["status-changed"] = [];
    cleanUp();
    ws?.close();
  },
};

type MessagesReceivedSubscriberType = (messages: MessageChatAPIType[]) => void;
type StatusChengedSubscriberType = (status: StatusType) => void;

export type StatusType = "panding" | "ready" | "error"
export type MessageChatAPIType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};
