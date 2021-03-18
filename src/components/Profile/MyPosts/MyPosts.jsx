import React from "react";
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";

const MyPosts = (props) => {
  let postElemenst = props.posts.map((p) => (
    <Post messege={p.message} like={p.like} key={p.id} />
  ));
  return (
    <div className={styles.post}>
      <h3 className={styles.h3}>My post:</h3>
      {postElemenst}
    </div>
  );
};

export default MyPosts;
