import React from "react";
import styles from "./Post.module.css";
import avatar from "./../../../../img/avatar.jpg";
import like from "./../../../../img/like.png";

const Post = (props) => {
  return (
    <div className={styles.posts}>
      <div className={styles.post}>
        <img src={avatar} alt="" className={styles.img} />
        <span className={styles.text}>{props.messege}</span>        
        <div className={styles.likes}><img src={like} alt="" className={styles.like}/> {props.like}  </div>     
      </div>
    </div>
  );
};

export default Post;
