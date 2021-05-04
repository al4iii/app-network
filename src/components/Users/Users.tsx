import styles from "./Users.module.css";
import Pagination from "../../common/Pagination/Pagination";
import User from "./User";
import UsersSearchForm from "./UsersSearchForm";
import { FC, useEffect } from "react";
import { FilterType, getUsersAC } from "../../redux/users-reduser";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount, getUsers, getUsersFilter } from "./../../redux/users-selector";

type PropsType = {};
export const Users: FC<PropsType> = (props) => {
  const totalUsersCount = useSelector(getTotalUsersCount);
  const currentPage = useSelector(getCurrentPage);
  const pageSize = useSelector(getPageSize);
  const filter = useSelector(getUsersFilter);
  const users = useSelector(getUsers);
  const followingInProgress = useSelector(getFollowingInProgress);
  const dispatch = useDispatch();
  const onPageChenged = (pageNumber: number) => {
    dispatch(getUsersAC(pageNumber, pageSize, filter));
  };
  const onFilterChanged = (filter: FilterType) => {
    dispatch(getUsersAC(1, pageSize, filter));
  };
  const follow = (id: number) => {
    dispatch(follow(id));
  };
  const unfollow = (id: number) => {
    dispatch(unfollow(id));
  };
  useEffect(() => {
    dispatch(getUsersAC(currentPage, pageSize, filter));
  }, []);
  return (
    <div>
      <UsersSearchForm onFilterChanged={onFilterChanged} />
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
