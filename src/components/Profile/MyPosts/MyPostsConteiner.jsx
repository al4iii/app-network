import { connect } from "react-redux";
import MyPosts from "./MyPosts";

let mapStateToPtops = (state) => {
  console.log(state.profilePage);
  return {
    posts: state.profilePage.posts,
  };
};
let mapDispatchToPtops = (dispatch) => {
  return {};
};
const MyPostsConteiner = connect(mapStateToPtops, mapDispatchToPtops)(MyPosts);
export default MyPostsConteiner;
