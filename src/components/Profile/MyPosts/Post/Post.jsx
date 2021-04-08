import React from "react";
import styles from "./Post.module.css";
import likes from "./../../../../img/like.png";
import user from "./../../../../img/user-male.png";

const Post = ({ myProfilePhoto, messege, like }) => {
  return (
    <div className={styles.posts}>
      <div className={styles.post}>
        <img src={myProfilePhoto || user} alt="" className={styles.img} />
        <span className={styles.text}>{messege}</span>
        <div className={styles.likes}>
          <img src={likes} alt="" className={styles.like} />
          <span> {like}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
