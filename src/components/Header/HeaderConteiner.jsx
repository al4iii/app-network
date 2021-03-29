import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserData, setAuthUserAvatar } from "../../redux/auth-reduser";
import { authAPI } from "../../API/api";

class HeaderConteiner extends React.Component {
  componentDidMount() {
    authAPI.getAuth().then((response) => {
      if (response.resultCode === 0) {
        let { id, login, email } = response.data;
        this.props.setAuthUserData(id, login, email);
      }
    });
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
  };
};
export default connect(mapStateToProps, { setAuthUserData, setAuthUserAvatar })(
  HeaderConteiner
);
