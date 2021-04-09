import React from "react";
import styles from "./ProfileInfo.module.css";
import Button from "../../../../common/Button/Button";
import Preloader from "../../../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import user from "./../../../../img/user-male.png";
import { Field, reduxForm } from "redux-form";
import { reaquired, maxLengthCreater } from "../../../../helpers/validators/validators";
import { Textarea } from "../../../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreater(10);

const ProfileInfo = ({ profile, status, getStatus, myId, updateStatus, addPosts, isOwner, savePhoto}) => {
  if (!profile) {
    return <Preloader />;
  }
  const onMailPhotoSelect = (e) => {
    debugger;
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };
  
  return (
    <div className={styles.myPosts}>
      <div className={styles.profile}>
        <img
          src={profile.photos.large || user}
          className={styles.profile_img}
        />
        {isOwner && (
          <div className={styles.profile_addPhoto}>
            <input type="file" onChange={onMailPhotoSelect} />
          </div>
        )}
        <div className={styles.profile_info}>
          <div className={styles.profile_item}>
            <span className={styles.profile_span}>Full mame:</span>
            {profile.fullName}
          </div>
          <div className={styles.profile_item}>
            <span className={styles.profile_span}>about me: </span>
            {profile.aboutMe}
          </div>
          <div className={styles.profile_item}>
            <span className={styles.profile_span}>id: </span>
            {profile.userId}
          </div>
          <ProfileStatusWithHooks
            status={status}
            getStatus={getStatus}
            myId={myId}
            userId={profile.userId}
            updateStatus={updateStatus}
          />
        </div>
        <AddNewPostRedux onSubmit={(value) => addPosts(value.newPostText)} />
      </div>
    </div>
  );
};

const AddNewPost = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className={styles.enter}>
      <div>
        <div className={styles.textarea}>
          <Field
            className={styles.form}
            placeholder="enter post"
            name={"newPostText"}
            component={Textarea}
            validate={[reaquired, maxLength10]}
          />
        </div>
        <div className={styles.button}>
          <Button text={"add post"} />
        </div>
      </div>
    </form>
  );
};

const AddNewPostRedux = reduxForm({ form: "newPostText" })(AddNewPost);

export default ProfileInfo;
