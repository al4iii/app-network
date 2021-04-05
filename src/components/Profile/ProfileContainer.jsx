import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { setUserProfile, getUser, getStatus } from "../../redux/profile-reduser";
import { compose } from "redux";
import withAuthRedirect from "../HOC/withAuthRedirect";


class ProfileConteiner extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.userId || this.props.userId);
  }
  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    userId: state.auth.userId,
  };
};

export default compose(  
  withAuthRedirect,
  withRouter,
  connect(mapStateToProps, { setUserProfile, getUser, getStatus})
)(ProfileConteiner);
