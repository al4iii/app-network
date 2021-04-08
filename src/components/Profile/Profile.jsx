import React from "react";
import styles from "./Profile.module.css";
import ProfileInfoConteiner from "./MyPosts/ProfileInfo/ProfileInfoConteiner";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";

const Profile = ({ profile }) => {
  return (
    <div>
      <ProfileInfoConteiner profile={profile} />
      <MyPostsConteiner profile={profile} />
    </div>
  );
};

export default Profile;
