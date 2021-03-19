import React from "react";
import styles from "./ProfileInfo.module.css";
import illustration from "./../../../../img/illustration.jpg";
import Button from "../../../Dialods/Button/Button";

const ProfileInfo = (props) => {
  let newPost = React.createRef();
  let addPost = () => props.dispatch({ type: "ADD_POST" });
  let onPostChecge = () => {
    const action = {
      type: "UPDATE_NEW_POST_TEXT",
      post: newPost.current.value,
    };
    props.dispatch(action);
  };
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
