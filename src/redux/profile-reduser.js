const ADD_POST = "profile/ADD-POST";
const UPDATE_NEW_POST_TEXT = "profile/UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", like: 1 },
    { id: 2, message: "Hi!!", like: 55 },
    { id: 3, message: "I'm sexy and I know it", like: 144 },
    { id: 4, message: "Have a good day", like: 15 },
    { id: 5, message: "It's my first post!!", like: 177 },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_POST:
      return state.newPostText
        ? {
            ...state,
            posts: [
              ...state.posts,
              {
                id: state.posts.length + 2,
                message: state.newPostText,
                like: 0,
              },
            ],
            newPostText: "",
          }
        : { ...state };
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.post };
    }
    default:
      return state;
  }
};

export const updateNewPostAC = (post) => ({
  type: UPDATE_NEW_POST_TEXT,
  post: post,
});
export const addPostAC = () => ({ type: ADD_POST });

export default profileReducer;
