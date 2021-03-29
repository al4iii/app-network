import { connect } from "react-redux";
import {
  follow,
  setCurrentPages,
  setUsers,
  unfollow,
  setTotalUsersCount,
  toggleIsFetching,
} from "../../redux/users-reduser";
import Users from "./Users";
import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import { usersAPI } from "../../API/api";


class UsersConteiner extends React.Component {
  onPageChenged = (pageNumber) => {
    this.props.setCurrentPages(pageNumber);
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(pageNumber, this.props.pageSize).then((response) => {
      this.props.setUsers(response.items);
      this.props.toggleIsFetching(false);
    });
  };
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((response) => {
      this.props.setUsers(response.items);
      this.props.setTotalUsersCount(response.totalCount);
      this.props.toggleIsFetching(false);
    });
  }
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
          unfollow={this.props.unfollow}
          follow={this.props.follow}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPages,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersConteiner);
