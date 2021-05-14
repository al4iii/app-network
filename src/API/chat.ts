let subscribers = [] as SubscriberType[];
let ws: WebSocket | null = null;
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
  ws.addEventListener("message", messageHendler);
}
const messageHendler = (e: MessageEvent) => {
  let newMessages = JSON.parse(e.data);
  subscribers.forEach((s) => s(newMessages));
};
export const chatAPI = {
  subscribe(callback: SubscriberType) {
    subscribers.push(callback);
    return () => {
      subscribers = subscribers.filter((s) => s !== callback);
    };
  },
  unsubscribe(callback: SubscriberType) {
    subscribers = subscribers.filter((s) => s !== callback);
  },
  sendMessage(message: string) {
    ws?.send(message);
  },
  start() {
    creacteChanel();
  },
  stop() {
    subscribers = [];
    ws?.removeEventListener("close", closeHendler);
    ws?.removeEventListener("message", messageHendler);
    ws?.close();
  },
};

type SubscriberType = (messages: MessageType[]) => void;
export type MessageType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};
