import { connect } from "react-redux";
import { addPosts, getStatus, updateStatus } from "../../../../redux/profile-reduser";
import ProfileInfo from "./ProfileInfo";

let mapStateToPtops = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    status: state.profilePage.status,
    myId: state.auth.userId,
  };
};

export default connect(mapStateToPtops, { addPosts, getStatus, updateStatus })( ProfileInfo );
