const ADD_POST = "profile/ADD-POST";
const UPDATE_NEW_POST_TEXT = "profile/UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "dialog/ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "dialog/UPDATE_NEW_MESSAGE_TEXT";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", like: 1 },
        { id: 2, message: "Hi!!", like: 55 },
        { id: 3, message: "I'm sexy!!", like: 144 },
        { id: 4, message: "Have a good day", like: 15 },
        { id: 5, message: "It's my first post!!", like: 177 },
      ],
      newPostText: "",
    },
    messagePage: {
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
      newMassageText: "",
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
    if (action.type === ADD_POST) {
      let post = this._state.profilePage.newPostText;
      let newId = this._state.profilePage.posts.length + 2;
      let newPost = { id: newId, message: post, like: 0 };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callsubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let message = this._state.messagePage.newMassageText;
      let newId = this._state.messagePage.messages.length + 2;
      let newMessage = { id: newId, message: message };
      this._state.messagePage.messages.push(newMessage);
      this._state.messagePage.newMassageText = "";
      this._callsubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.post;
      this._callsubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.messagePage.newMassageText = action.messege;
      this._callsubscriber(this._state);
    }
  },
};

export const addMessageAC = () => ({ type: ADD_MESSAGE });
export const addPostAC = () => ({ type: ADD_POST });
export const updateNewMessageAC = (newMessages) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  messege: newMessages.current.value,
});
export const updateNewPostAC = (newPost) => ({
  type: UPDATE_NEW_POST_TEXT,
  post: newPost.current.value,
});

window.store = store;
export default store;
