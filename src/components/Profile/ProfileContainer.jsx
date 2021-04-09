import React from "react";
import Profile from "./Profile";
import withAuthRedirect from "../HOC/withSuspense";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { getProfile, getUserId } from "../../redux/profile-selector";
import { setUserProfile, getUser, getStatus } from "../../redux/profile-reduser";

class ProfileConteiner extends React.Component {
  refreshProfile = () => {
    this.props.getUser(this.props.match.params.userId || this.props.userId);
  };
  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate() { 
      this.refreshProfile();    
  }
  render() {
    return (
      <Profile {...this.props} isOwner={!this.props.match.params.userId} />
    );
  }
}

let mapStateToProps = (state) => {
  return {   
    profile: getProfile(state),
    userId: getUserId(state),
  };
};

export default compose(
  withAuthRedirect,
  withRouter,
  connect(mapStateToProps, { setUserProfile, getUser, getStatus })
)(ProfileConteiner);
