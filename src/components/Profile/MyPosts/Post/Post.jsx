import React from "react";
import styles from "./Post.module.css";
import avatar from "./../../../../img/avatar.jpg";
import like from "./../../../../img/like.png";

const Post = (props) => {
  return (
    <div>
      <div className={styles.post}>
        <img src={avatar} alt="" className={styles.img} />
        <span className={styles.text}>How are you?)</span>
      </div>
      <div className={styles.like}>
        <span>
          5 <img src={like} alt="" />
        </span>
      </div>
    </div>
  );
};

export default Post;
