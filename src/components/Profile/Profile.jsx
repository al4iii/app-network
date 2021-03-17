import React from "react";
import styles from "./Profile.module.css";
import illustration from "./../../img/illustration.jpg";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <img src={illustration} />
      <div>ava + desc</div>
      <div>
        My post
        <div>
          new post:
          <div>post 1</div>
          <div>post 2</div>
          <div>post 3</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
