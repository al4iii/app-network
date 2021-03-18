import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = () => {
  let posts = [
    { id: 1, message: "Hi, how are you?", like: 1 },
    { id: 2, message: "Hi!", like: 55 },
    { id: 3, message: "I am sexy!!", like: 144 },
    { id: 4, message: "Have a good day", like: 15 },
    { id: 5, message: "It my first post!!", like: 177 },
  ];
  return (
    <div>      
      <ProfileInfo />    
      <MyPosts posts={posts}/>
    </div>
  );
};

export default Profile;
