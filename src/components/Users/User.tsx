import { FC } from "react";
import styles from "./Users.module.css";
import avatar from "./../../img/user-male.png";
import { NavLink } from "react-router-dom";
import { userType } from "../../types/types";

type PropsType = {
  user: userType;
  followingInProgress: Array<number>;
  unfollow: (id: number) => void;
  follow: (id: number) => void;
};

const User: FC<PropsType> = ({ user, followingInProgress, unfollow, follow }) => {
  let status = user.status;  
  return (
    <div className={styles.user}>
      <span>
        <div className={styles.userPhoto}>
          <NavLink to={`/profile/${user.id}`}>
            <img className={styles.user_img} src={user.photos.small || avatar} alt="foto" />
          </NavLink>
        </div>
        <div className={styles.button}>
          {user.followed ? (
            <button disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => { unfollow(user.id)}} >
              Unfollow
            </button>
          ) : (
            <button disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => { follow(user.id) }} >
              Follow
            </button>
          )}
        </div>
      </span>
      <span className={styles.user_info}>
        <div className={styles.item_info}>Name: {user.name}</div>
        <div className={styles.item_info}>{!!status ? (status.length > 30 ? status.substr(0, 30) : status) : "no status"}</div>
        <div className={styles.item_info}> id : {user.id}</div>
      </span>
    </div>
  );
};

export default User;
