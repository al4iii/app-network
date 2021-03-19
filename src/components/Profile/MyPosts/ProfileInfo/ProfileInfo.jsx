import React from "react";
import styles from "./ProfileInfo.module.css";
import illustration from "./../../../../img/illustration.jpg";
import Button from "../../../Dialods/Button/Button";

const ProfileInfo = (props) => {
  let newPost = React.createRef();
  let addPost = () => {
    let text = newPost.current.value;
    props.addPost(text);
    newPost.current.value = "";
  };

  return (
    <div className={styles.myPosts}>
      <img src={illustration} className={styles.img} />
      <div className={styles.enter}>
        <div className={styles.textarea}>
          <textarea ref={newPost} placeholder="enter text" />
        </div>
        <div className={styles.button}>
          <Button text={"add post"} onClick={addPost} />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
