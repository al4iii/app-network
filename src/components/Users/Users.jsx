import React from "react";
import styles from "./Users.module.css";
import avatar from "./../../img/user-male.png";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i < pagesCount; i++) {
    if (pagesCount > 20) {
      pagesCount = 20;
    }
    pages.push(i);
  }
  return (
    <div>
      <div className={styles.pagination}>
        {pages.map((p) => {
          return (
            <span
              key={p.id}
              onClick={(e) => props.onPageChenged(p)}
              className={props.currentPage === p && styles.selectedPage}
            >
              {p}
            </span>
          );
        })}
      </div>
      <div className={styles.users}>
        {props.users.map((u) => (
          <div key={u.id} className={styles.user}>
            <span>
              <div className={styles.userPhoto}>
                <NavLink to={`/profile/${u.id}`}>
                  <img
                    className={styles.user_img}
                    src={u.photos.small || avatar}
                    alt="foto"
                  />
                </NavLink>
              </div>
              <div className={styles.button}>
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
            <span className={styles.user_info}>
              <div className={styles.item_info}>Name: {u.name}</div>
              <div className={styles.item_info}>{u.status || "no status"}</div>
              <div className={styles.item_info}> id : {u.id}</div>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
