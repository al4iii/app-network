import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserAvatar, auth, logout } from "../../redux/auth-reduser";

class HeaderConteiner extends React.Component {
  componentDidUpdate() {
    this.props.auth();
  }
  render() {
    return <Header {...this.props} />;
  }
}
let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userId: state.auth.userId,
    isFetching: state.auth.isFetching,
    email: state.auth.email,
    avatar: state.auth.avatar,
    profilePhoto: state.profilePage.myProfilePhoto,
  };
};

export default connect(mapStateToProps, { setAuthUserAvatar, auth, logout })(
  HeaderConteiner
);
