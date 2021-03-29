import React from "react";
import styles from "./Users.module.css";
import avatar from "./../../img/user-male.png";
import { NavLink } from "react-router-dom";
import Pagination from "../../common/Pagination/Pagination";
import axios from "axios";

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
                  <button
                    onClick={() => {
                      axios
                        .delete(
                          `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                          { withCredentials: true,
                            headers: {
                              "API-KEY": "5fbca2cc-88e1-4c18-b855-d03cb389add5",
                            },
                          }
                        )
                        .then((response) => response.data.resultCode == 0 && props.unfollow(u.id)
                        );
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      axios
                        .post(
                          `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                          {},
                          {
                            withCredentials: true,
                            headers: {
                              "API-KEY": "5fbca2cc-88e1-4c18-b855-d03cb389add5",
                            },
                          }
                        )
                        .then((response) => response.data.resultCode == 0 && props.follow(u.id));
                    }}
                  >
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
