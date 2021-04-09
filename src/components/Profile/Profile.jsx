import React from "react";
import styles from "./Profile.module.css";
import ProfileInfoConteiner from "./MyPosts/ProfileInfo/ProfileInfoConteiner";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";

const Profile = ({ profile, isOwner }) => {
  return (
    <div>
      <ProfileInfoConteiner profile={profile} isOwner={isOwner} />
      <MyPostsConteiner profile={profile} />
    </div>
  );
};

export default Profile;
