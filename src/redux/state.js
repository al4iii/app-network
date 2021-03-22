import dialodsReduser from "./dialogs-reduser";
import profileReduser from "./profile-reduser";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", like: 1 },
        { id: 2, message: "Hi!!", like: 55 },
        { id: 3, message: "I'm sexy and I know it", like: 144 },
        { id: 4, message: "Have a good day", like: 15 },
        { id: 5, message: "It's my first post!!", like: 177 },
      ],
      newPostText: "",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Dima", active: "active" },
        { id: 2, name: "Alina", active: " " },
        { id: 3, name: "Ninja", active: " " },
        { id: 4, name: "Spider-man", active: " " },
      ],
      messages: [
        { id: 1, message: "hello" },
        { id: 2, message: "How are you" },
        { id: 3, message: "yoyo" },
        { id: 4, message: "hello-man " },
      ],
      newMessageText: "",
    },
  },
  _callsubscriber() {
    console.log("state was chengen");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callsubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReduser(this._state.profilePage, action);
    this._state.dialogsPage = dialodsReduser(this._state.dialogsPage, action);
    this._callsubscriber(this._state);
  },
};

window.store = store;
export default store;
