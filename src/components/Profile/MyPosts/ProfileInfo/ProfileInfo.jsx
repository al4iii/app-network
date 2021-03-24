import React from "react";
import styles from "./ProfileInfo.module.css";
import illustration from "./../../../../img/illustration.jpg";
import Button from "../../../Dialods/Button/Button";

const ProfileInfo = (props) => { 
  let onAddPost = () => props.addPost();
  let onPostChecge = (e) => props.postChecge(e.target.value);
  return (
    <div className={styles.myPosts}>
      <img src={illustration} className={styles.img} />
      <div className={styles.enter}>
        <div className={styles.textarea}>
          <textarea className={styles.form}
            placeholder="enter post"
            value={props.newPostText}
            onChange={onPostChecge}
          />
        </div>
        <div className={styles.button}>
          <Button text={"add post"} onClick={onAddPost} />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
