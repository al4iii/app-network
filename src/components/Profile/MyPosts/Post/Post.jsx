import React from "react";
import styles from "./Post.module.css";
import like from "./../../../../img/like.png";
import user from "./../../../../img/user-male.png";

const Post = (props) => {
  return (
    <div className={styles.posts}>
      <div className={styles.post}>
        <img src={props.myProfilePhoto || user} alt="" className={styles.img} />
        <span className={styles.text}>{props.messege}</span>
        <div className={styles.likes}>
          <img src={like} alt="" className={styles.like} /> 
         <span> {props.like}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
