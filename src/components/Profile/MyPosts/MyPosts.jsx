import React from "react";
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";

const MyPosts = () => {
  let posts = [
    { id: 1, message: "Hi, how are you?", like: 1 },
    { id: 2, message: "Hi!", like: 55 },
    { id: 3, message: "I am sexy!!", like: 144 },
    { id: 4, message: "Have a good day", like: 15 },
    { id: 5, message: "It my first post!!", like: 177 },
  ];
  let postElemenst = posts.map((p) => (<Post messege={p.message} like={p.like} key={p.id} />));
  return (
    <div>
      <div className={styles.post}>
        <h3 className={styles.h3}>My post:</h3>
        {postElemenst}
      </div>
    </div>
  );
};

export default MyPosts;
