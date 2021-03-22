import React from "react";
import { addPostAC, updateNewPostAC } from "../../../../redux/profile-reduser";
import ProfileInfo from "./ProfileInfo";

const ProfileInfoConteiner = (props) => {
  return (
    <ProfileInfo
      addPost={() => props.dispatch(addPostAC())}
      postChecge={(text) => props.dispatch(updateNewPostAC(text))}
      newPostText={props.state.newPostText}
    />
  );
};

export default ProfileInfoConteiner;
