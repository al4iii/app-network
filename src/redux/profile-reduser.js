const ADD_POST = "profile/ADD-POST";
const UPDATE_NEW_POST_TEXT = "profile/UPDATE-NEW-POST-TEXT";

const profileReduser = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let post = state.newPostText;
      let newId = state.posts.length + 2;
      let newPost = { id: newId, message: post, like: 0 };
      state.newPostText ? state.posts.push(newPost) : state.newPostText = "";
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.post;
      return state;
    default:
      return state;
  }
};

export const updateNewPostAC = (post) => ({ type: UPDATE_NEW_POST_TEXT, post: post});
export const addPostAC = () => ({ type: ADD_POST });

export default profileReduser;
