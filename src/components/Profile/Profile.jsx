import React from "react";
import styles from "./Profile.module.css";
import ProfileInfoConteiner from "./MyPosts/ProfileInfo/ProfileInfoConteiner";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";

const Profile = () => {
  return (
    <div>
      <ProfileInfoConteiner />
      <MyPostsConteiner />;
    </div>
  );
};

export default Profile;
