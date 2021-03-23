import React from "react";
import styles from "./Profile.module.css";
import ProfileInfoConteiner from "./MyPosts/ProfileInfo/ProfileInfoConteiner";
import MyPosts from "./MyPosts/MyPosts";
import StoreContext from "../../StoreContext";

const Profile = () => {
  return (
    <StoreContext.Consumer>
      {(store) => (
        <div>
          <ProfileInfoConteiner  store={store}/>
          <MyPosts posts={store.getState().profilePage.posts} />;
        </div>
      )}
    </StoreContext.Consumer>
  );
};

export default Profile;
