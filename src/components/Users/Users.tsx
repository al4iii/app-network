import { FC } from "react";
import styles from "./Users.module.css";
import Pagination from "../../common/Pagination/Pagination";
import User from "./User";
import UsersSearchForm from "./UsersSearchForm";
import { userType } from "../../types/types";
import { FilterType } from "../../redux/users-reduser";

type PropsType = {
  currentPage: number;
  onPageChenged: (pageNumber: number) => void;
  pageSize: number;
  totalUsersCount: number;
  users: Array<userType>;
  followingInProgress: Array<number>;
  unfollow: (id: number) => void;
  follow: (id: number) => void;
  onFilterChanged: (filter:FilterType)=> void
};

const Users: FC<PropsType> = ({ currentPage, onPageChenged, pageSize, totalUsersCount, users, followingInProgress,
  unfollow, follow, onFilterChanged}) => {
  return (
    <div>
      <UsersSearchForm onFilterChanged={onFilterChanged}/>
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
