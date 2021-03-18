import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div>      
      <ProfileInfo />    
      <MyPosts />
    </div>
  );
};

export default Profile;
