import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";
import ProfileInfoConteiner from "./MyPosts/ProfileInfo/ProfileInfoConteiner";
import store from "../../redux/state";

const Profile = () => {
  return (
    <div>
      <ProfileInfoConteiner store={store} />
      <MyPosts posts={store.getState().profilePage.posts} />
    </div>
  );
};

export default Profile;
