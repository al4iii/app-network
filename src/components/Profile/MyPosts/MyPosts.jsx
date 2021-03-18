import React from "react";
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";

const MyPosts = () => {
  let messagesData = [
    { id: 1, message: "Hi, how are you?", like: 1 },
    { id: 2, message: "Hi!", like: 55 },
    { id: 3, message: "I am sexy!!", like: 144 },
    { id: 4, message: "Have a good day", like: 15 },
    { id: 5, message: "It my first post!!", like: 177 },
  ];
  return (
    <div>
      <div className={styles.post}>
        <h3 className={styles.h3}>My post:</h3>
        <Post messege={messagesData[0].message} like={messagesData[0].like} />
        <Post messege={messagesData[1].message} like={messagesData[1].like} />
        <Post messege={messagesData[2].message} like={messagesData[2].like} />
        <Post messege={messagesData[3].message} like={messagesData[3].like} />
        <Post messege={messagesData[4].message} like={messagesData[4].like} />
      </div>
    </div>
  );
};

export default MyPosts;
