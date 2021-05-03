import React from "react";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import { connect } from "react-redux";
import { compose } from "redux";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize,
  getTotalUsersCount, getUsersSuperSelector, getUsersFilter} from "../../redux/users-selector";
import { getUsersAC, unfollow, follow, FilterType } from "../../redux/users-reduser";
import { userType } from "../../types/types";
import { AppStateType } from "../../redux/redux-store";

type MapStatePropsType = {
  currentPage: number;
  pageSize: number;
  isFetching: boolean;
  totalUsersCount: number;
  users: Array<userType>;
  followingInProgress: Array<number>;
  filter: FilterType
};
type MapDispatchPropsType = {
  unfollow: (id: number) => void;
  follow: (id: number) => void;
  getUsersAC: (currentPage: number, pageSize: number, filter: FilterType) => void;
  
};
type OwnPropsType = {};

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

class UsersConteiner extends React.Component<PropsType> {
  componentDidMount() {
    const { currentPage, pageSize, filter} = this.props;
    this.props.getUsersAC(currentPage, pageSize, filter);
  }
  onPageChenged = (pageNumber: number) => {
    const { pageSize, filter } = this.props;
    this.props.getUsersAC(pageNumber, pageSize, filter);
  };
  onFilterChanged=(filter: FilterType)=>{
    const { pageSize } = this.props;
    this.props.getUsersAC( 1, pageSize, filter);
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
          followingInProgress={this.props.followingInProgress}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          onFilterChanged={this.onFilterChanged}
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
    filter: getUsersFilter(state)
  };
};

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
    mapStateToProps,
    { follow, unfollow, getUsersAC }
  )
)(UsersConteiner);
