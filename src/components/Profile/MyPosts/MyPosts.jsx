import React from "react";
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";

const MyPosts = () => {
  return (
    <div>
      <div className={styles.div}>
        <div>
          <textarea />
          <div>
            <button className={styles.button}>add Post</button>
          </div>
        </div>
        <h3>My post:</h3>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
