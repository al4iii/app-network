import React from "react";
import styles from "./ProfileInfo.module.css";
import illustration from "./../../../../img/illustration.jpg";
import Button from "../../../Dialods/Button/Button";
import { addPostAC, updateNewPostAC } from "../../../../redux/state";

const ProfileInfo = (props) => {
  let newPost = React.createRef();  
  let addPost = () => props.dispatch(addPostAC());
  let onPostChecge = () => props.dispatch(updateNewPostAC(newPost));
  return (
    <div className={styles.myPosts}>
      <img src={illustration} className={styles.img} />
      <div className={styles.enter}>
        <div className={styles.textarea}>
          <textarea
            ref={newPost}
            placeholder="enter text"
            value={props.state.newPostText}
            onChange={onPostChecge}
          />
        </div>
        <div className={styles.button}>
          <Button text={"add post"} onClick={addPost} />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
