import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo state={props.state} dispatch={props.dispatch} />
      <MyPosts posts={props.state.posts} />
    </div>
  );
};

export default Profile;
