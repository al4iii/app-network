import { connect } from "react-redux";
import { addPostAC, updateNewPostAC } from "../../../../redux/profile-reduser";
import ProfileInfo from "./ProfileInfo";

let mapStateToPtops = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
  };
};
let mapDispatchToPtops = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostAC());
    },
    postChecge: (text) => {
      dispatch(updateNewPostAC(text));
    },
  };
};
const ProfileInfoConteiner = connect(
  mapStateToPtops,
  mapDispatchToPtops
)(ProfileInfo);
export default ProfileInfoConteiner;
