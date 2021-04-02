import React from "react";
import styles from "./ProfileInfo.module.css";
import Button from "../../../../common/Button/Button";
import Preloader from "../../../../common/Preloader/Preloader";
import user from "./../../../../img/user-male.png";
import ProfileStatus from "./ProfileStatus";
import { Field, reduxForm } from "redux-form";
import {
  reaquired,
  maxLengthCreater,
} from "../../../../helpers/validators/validators";
import { Textarea } from "../../../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreater(10);

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={styles.myPosts}>
      <div className={styles.profile}>
        <img
          src={props.profile.photos.large || user}
          className={styles.profile_img}
        />
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
          <ProfileStatus
            status={props.status}
            getStatus={props.getStatus}
            myId={props.myId}
            userId={props.profile.userId}
            updateStatus={props.updateStatus}
          />
        </div>
        <AddNewPostRedux
          onSubmit={(value) => props.addPosts(value.newPostText)}
        />
      </div>
    </div>
  );
};

const AddNewPost = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.enter}>
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
