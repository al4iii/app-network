import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>      
      <ProfileInfo />    
      <MyPosts posts={props.posts}/>
    </div>
  );
};

export default Profile;
