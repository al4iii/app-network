import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";
import illustration from "./../../img/illustration.jpg";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <img src={illustration} className={styles.img} />
      <div>ava + desc</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
