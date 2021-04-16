import React from "react";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import { connect } from "react-redux";
import { compose } from "redux";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize,
  getTotalUsersCount, getUsersSuperSelector} from "../../redux/users-selector";
import { getUsersAC, unfollow, follow } from "../../redux/users-reduser";
import { userType } from "../../types/types";
import { AppStateType } from "../../redux/redux-store";

type MapStatePropsType = {
  currentPage: number;
  pageSize: number;
  isFetching: boolean;
  totalUsersCount: number;
  users: Array<userType>;
  followingInProgress: Array<number>;
};
type MapDispatchPropsType = {
  unfollow: (id: number) => void;
  follow: (id: number) => void;
  getUsersAC: (currentPage: number, pageSize: number) => void;
};
type OwnPropsType = {};

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

class UsersConteiner extends React.Component<PropsType> {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.getUsersAC(currentPage, pageSize);
  }
  onPageChenged = (pageNumber: number) => {
    const { pageSize } = this.props;
    this.props.getUsersAC(pageNumber, pageSize);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          onPageChenged={this.onPageChenged}
          followingInProgress={this.props.followingInProgress}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
        />
      </>
    );
  }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: getUsersSuperSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  // TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
    mapStateToProps,
    { follow, unfollow, getUsersAC }
  )
)(UsersConteiner);
