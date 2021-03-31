import React from "react";
import styles from "./Users.module.css";
import avatar from "./../../img/user-male.png";
import { NavLink } from "react-router-dom";
import Pagination from "../../common/Pagination/Pagination";

const Users = (props) => {
  return (
    <div>
      <Pagination
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        onPageChenged={props.onPageChenged}
        currentPage={props.currentPage}
      />
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
                  <button disabled={props.followingInProgress.some((id) => id == u.id )}
                    onClick={() => {props.unfollow(u.id)}}> 
                    Unfollow
                  </button>
                ) : (
                  <button disabled={props.followingInProgress.some((id) => id == u.id )}
                    onClick={() => { props.follow(u.id)}} >
                    Follow
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
