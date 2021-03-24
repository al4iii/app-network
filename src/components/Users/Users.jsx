import axios from "axios";
import React from "react";
import style from "./Users.module.css";
import avatar from "./../../img/user-male.png";

const Users = (props) => {
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        props.setUsers(response.data.items);
      });
  }
  return (
    <div className={style.users}>
      {props.users.map((u) => (
        <div key={u.id} className={style.user}>
          <span>
            <div>
              <img
                src={u.photos.small || avatar}
                alt="foto"
                className={style.userPhoto}
              />
            </div>
            <div className={style.button}>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  follow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  unfollow
                </button>
              )}
            </div>
          </span>
          <span className={style.user_info}>
            <div className={style.item_info}>Name: {u.name}</div>
            <div className={style.item_info}>{u.status || "no status"}</div>
            <div className={style.item_info}> id : {u.id}</div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
