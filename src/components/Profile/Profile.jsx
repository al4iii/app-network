import React from "react";
import styles from "./Profile.module.css";
import ProfileInfoConteiner from "./MyPosts/ProfileInfo/ProfileInfoConteiner";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";
import withAuthRedirect from "../HOC/withAuthRedirect";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfoConteiner profile={props.profile} />
      <MyPostsConteiner profile={props.profile} />
    </div>
  );
};

export default withAuthRedirect(Profile);
