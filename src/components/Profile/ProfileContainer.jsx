import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile } from "../../redux/profile-reduser";
import { withRouter } from "react-router";
import { usersAPI } from "../../API/api";

class ProfileConteiner extends React.Component {
  componentDidMount() {
    usersAPI.getUser(this.props.match.params.userId).then((response) => {
      this.props.setUserProfile(response);
    });
  }
  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};
export default withRouter(
  connect(mapStateToProps, { setUserProfile })(ProfileConteiner)
);
