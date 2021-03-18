import React from "react";
import styles from "./ProfileInfo.module.css";
import illustration from "./../../../../img/illustration.jpg";
import Button from "../../../Dialods/Button/Button";

const ProfileInfo = (props) => {
  return (
    <div className={styles.myPosts}>
      <img src={illustration} className={styles.img} />
      <div className={styles.enter}>
        <div className={styles.textarea}>
          <textarea />
        </div>
        <div className={styles.button}>
        <Button text={"add post"}  />
        </div>
        
      </div>
    </div>
  );
};

export default ProfileInfo;
