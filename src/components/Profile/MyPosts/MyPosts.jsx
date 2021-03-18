import React from "react";
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const MyPosts = () => {
  return (
    <div>
     
      <div className={styles.post}>
        <h3 className={styles.h3}>My post:</h3>
        <Post messege="Hi, how are you?" like="1" />
        <Post messege="Hi!!" like="55" />
        <Post messege="I am sexy!!" like="114" />
        <Post messege="Have a good day" like="15" />
        <Post messege="It my first post!!" like="166" />
      </div>
    </div>
  );
};

export default MyPosts;
