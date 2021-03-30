import { connect } from "react-redux";
import MyPosts from "./MyPosts";

let mapStateToPtops = (state) => {
  return {
    posts: state.profilePage.posts,
    myProfilePhoto: state.profilePage.myProfilePhoto,
  };
};

export default connect(mapStateToPtops, {})(MyPosts);
