import { connect } from "react-redux";
import { addPost, postChecge } from "../../../../redux/profile-reduser";
import ProfileInfo from "./ProfileInfo";

let mapStateToPtops = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
  };
};

export default connect(mapStateToPtops, { addPost, postChecge })(ProfileInfo);
