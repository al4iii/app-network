import React from "react";
import { addPostAC, updateNewPostAC } from "../../../../redux/profile-reduser";
import ProfileInfo from "./ProfileInfo";

const ProfileInfoConteiner = (props) => {
  return (
    <ProfileInfo      
      addPost={() => props.store.dispatch(addPostAC())}
      postChecge={(text) => props.store.dispatch(updateNewPostAC(text))}
      newPostText={props.store.getState().profilePage.newPostText}
    />
  );
};

export default ProfileInfoConteiner;
