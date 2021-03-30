import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { setUserProfile, getUser } from "../../redux/profile-reduser";
import { compose } from "redux";
import withAuthRedirect from "../HOC/withAuthRedirect";

class ProfileConteiner extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.userId || 15148);
  }
  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

export default compose( 
  withAuthRedirect,
  withRouter,
  connect(mapStateToProps, { setUserProfile, getUser })
)(ProfileConteiner);
