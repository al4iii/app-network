import { FC } from "react";
import styles from "./Users.module.css";
import Pagination from "../../common/Pagination/Pagination";
import User from "./User";
import { userType } from "../../types/types";

type PropsType = {
  currentPage: number;
  onPageChenged: (pageNumber: number) => void;
  pageSize: number;
  totalUsersCount: number;
  users: Array<userType>;
  followingInProgress: Array<number>;
  unfollow: (id: number) => void;
  follow: (id: number) => void;
};

const Users: FC<PropsType> = ({ currentPage, onPageChenged, pageSize, totalUsersCount,
  users, followingInProgress, unfollow, follow,}) => {
  return (
    <div>
      <Pagination
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        onPageChenged={onPageChenged}
        currentPage={currentPage}
      />
      <div className={styles.users}>
        {users.map((u) => (
          <User
            key={u.id}
            user={u}
            followingInProgress={followingInProgress}
            follow={follow}
            unfollow={unfollow}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
