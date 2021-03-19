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
  getState() {
    return this._state;
  },
  _callsubscriber() {},
  addPost() {
    let post = this._state.profilePage.newPostText;
    let newId = this._state.profilePage.posts.length + 2;
    let newPost = { id: newId, message: post, like: 0 };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callsubscriber(this._state);
  },
  addMessage() {
    debugger;
    let message = this._state.messagePage.newMassageText;
    let newId = this._state.messagePage.messages.length + 2;
    let newMessage = { id: newId, message: message };
    this._state.messagePage.messages.push(newMessage);
    this._state.messagePage.newMassageText = "";
    this._callsubscriber(this._state);
  },
  chengeNewPostText(post) {
    debugger;
    this._state.profilePage.newPostText = post;
    this._callsubscriber(this._state);
  },
  updateNewMassageText(messege) {
    this._state.messagePage.newMassageText = messege;
    this._callsubscriber(this._state);
  },
  subscribe(observer) {
    this._callsubscriber = observer;
  },
};

window.store = store;
export default store;
