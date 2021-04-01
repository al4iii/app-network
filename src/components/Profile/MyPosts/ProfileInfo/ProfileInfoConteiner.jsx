import { connect } from "react-redux";
import { addPost, getStatus, updateStatus } from "../../../../redux/profile-reduser";
import ProfileInfo from "./ProfileInfo";

let mapStateToPtops = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    status: state.profilePage.status,
    myId: state.auth.userId,
  };
};

export default connect(mapStateToPtops, { addPost, getStatus, updateStatus })(
  ProfileInfo
);
