import styles from "./Users.module.css";
import { Pagination } from 'antd';
import User from "./User";
import UsersSearchForm from "./UsersSearchForm";
import { FC, useEffect } from "react";
import { FilterType, follow, getUsersAC, unfollow } from "../../redux/users-reduser";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPage, getFollowingInProgress, getPageSize,
  getTotalUsersCount, getUsers, getUsersFilter } from "./../../redux/users-selector";
import { useHistory } from "react-router";
import * as queryString from "querystring";

type queryParams = {
  term?: string;
  page?: string;
  friend?: string;
};

export const Users: FC = (props) => {
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
  const onFollow = (id: number) => {
    dispatch(follow(id));
  };
  const onUnfollow = (id: number) => {
    dispatch(unfollow(id));
  };
  const history = useHistory();

  useEffect(() => {
    const parsed = queryString.parse(
      history.location.search.substr(1)
    ) as queryParams;
    let actualPage = currentPage;
    let actualFilter = filter;
    if (!!parsed.page) actualPage = Number(parsed.page);
    if (!!parsed.term)
      actualFilter = { ...actualFilter, term: parsed.term as string };
    switch (parsed.friend) {
      case "null":
        actualFilter = { ...actualFilter, friend: null };
        break;
      case "true":
        actualFilter = { ...actualFilter, friend: true };
        break;
      case "false":
        actualFilter = { ...actualFilter, friend: false };
        break;
    }
    dispatch(getUsersAC(actualPage, pageSize, actualFilter))}, [history, pageSize]);
  useEffect(() => {
    const query: queryParams = {};
    if (!!filter.term) query.term = filter.term;
    if (filter.friend !== null) query.friend = String(filter.friend);
    if (currentPage !== 1) query.page = String(currentPage);
    history.push({
      pathname: "/developers",
      search: queryString.stringify(query),
    });
  }, [filter, currentPage, history]);
  return (
    <div>
      <UsersSearchForm onFilterChanged={onFilterChanged} />
      <Pagination className={styles.pagination} showSizeChanger={false} defaultCurrent={1} pageSize={100} total={totalUsersCount} current={currentPage} onChange={onPageChenged}/>
      <div className={styles.users}>
        {users.map((u) => (
          <User
            key={u.id}
            user={u}
            followingInProgress={followingInProgress}
            follow={onFollow}
            unfollow={onUnfollow}
          />
        ))}       
      </div>
    </div>
  );
};
