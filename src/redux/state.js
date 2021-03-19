import rerenderEntireTree from "./render";

let state = {
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
    newMassageText: ""
  },
};

export let addPost = () => {
  let post = state.profilePage.newPostText;
  let newId = state.profilePage.posts.length + 2;
  let newPost = { id: newId, message: post, like: 0 };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};
export let addMessage = () => {
  let message = state.messagePage.newMassageText;
  let newId = state.messagePage.messages.length + 2;
  let newMessage = { id: newId, message: message };
  state.messagePage.messages.push(newMessage);
  state.messagePage.newMassageText = "";
  rerenderEntireTree(state);
};
export let chengeNewPostText = (post) => {
  state.profilePage.newPostText = post;
  rerenderEntireTree(state);
};
export let updateNewMassageText = (messege) => {
  state.messagePage.newMassageText = messege;
  rerenderEntireTree(state);
};


window.state = state;
export default state;
