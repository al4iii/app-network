import React from "react";
import styles from "./ProfileInfo.module.css";
import Button from "../../../Dialods/Button/Button";
import Preloader from "../../../../common/Preloader/Preloader";
import user from "./../../../../img/user-male.png";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  let onAddPost = () => props.addPost();
  let onPostChecge = (e) => props.postChecge(e.target.value);
  return (
    <div className={styles.myPosts}>
      <div className={styles.profile}>
        <img src={props.profile.photos.large  || user} className={styles.profile_img} />
        <div className={styles.profile_info}>
          <div className={styles.profile_item}>
            <span className={styles.profile_span}>Full mame:</span>
            {props.profile.fullName}
          </div>
          <div className={styles.profile_item}>
            <span className={styles.profile_span}>about me: </span>
            {props.profile.aboutMe}
          </div>
          <div className={styles.profile_item}>
            <span className={styles.profile_span}>id: </span>
            {props.profile.userId}
          </div>
        </div>
      </div>

      <div className={styles.enter}>
        <div className={styles.textarea}>
          <textarea
            className={styles.form}
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
