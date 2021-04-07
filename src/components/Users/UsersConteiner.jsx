import React from "react";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import { connect } from "react-redux";
import { setCurrentPages, getUsersAC, unfollow, follow } from "../../redux/users-reduser";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount,
   getUsersSuperSelector } from "../../redux/users-selector";
import { compose } from "redux";

class UsersConteiner extends React.Component {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.getUsersAC(currentPage, pageSize);
  }
  onPageChenged = (pageNumber) => {
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

let mapStateToProps = (state) => {
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
  connect(mapStateToProps, { setCurrentPages, getUsersAC, unfollow, follow })
)(UsersConteiner);
