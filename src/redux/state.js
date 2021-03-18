let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", like: 1 },
      { id: 2, message: "Hi!", like: 55 },
      { id: 3, message: "I am sexy!!", like: 144 },
      { id: 4, message: "Have a good day", like: 15 },
      { id: 5, message: "It my first post!!", like: 177 },
    ],
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
  },
};

export default state;
