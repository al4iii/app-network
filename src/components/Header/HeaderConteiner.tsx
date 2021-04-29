import React from "react";
import { connect } from "react-redux";
import Header, {DispatchPropsType, MapPropsType }  from "./Header";
import { logout } from "../../redux/auth-reduser";
import { AppStateType } from "../../redux/redux-store";

class HeaderConteiner extends React.Component<MapPropsType & DispatchPropsType> {
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userId: state.auth.userId,
    isFetching: state.auth.isFetching,
    email: state.auth.email,
    avatar: state.auth.avatar,
    profilePhoto: state.profilePage.myProfilePhoto,
    logout: () => {},
  } as MapPropsType);



export default connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, { logout })(HeaderConteiner);
