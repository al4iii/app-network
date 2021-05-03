import React from "react";
import Profile from "./Profile";
import withAuthRedirect from "../HOC/withSuspense";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import { compose } from "redux";
import { getProfile, getUserId } from "../../redux/profile-selector";
import { getUser, getStatus, actions } from "../../redux/profile-reduser";
import { AppStateType } from "../../redux/redux-store";

type MapPropsType = ReturnType<typeof mapStateToProps>
export type DistatchType = {
  setUserProfile:(userId: number)=> void
  getUser:(userId: number)=> void
  getStatus:()=> void
  addPosts: ()=> void
  saveProfile: ()=> Promise<any>
  updateStatus: ()=> void
  savePhoto: ()=> void
  
}
type PathParamsType = {
  userId: string,
}
type PropsType = MapPropsType & DistatchType & RouteComponentProps<PathParamsType>

class ProfileConteiner extends React.Component <PropsType>{
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

let mapStateToProps = (state: AppStateType) => {
  return {   
    profile: getProfile(state),
    userId: getUserId(state),
  };
};
const setUserProfile = actions.setUserProfile

export default compose(
  withAuthRedirect,
  withRouter,
  connect(mapStateToProps, { setUserProfile, getUser, getStatus })
)(ProfileConteiner);
