import React from "react";
import Profile from "./Profile";
import withAuthRedirect from "../HOC/withSuspense";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import { compose } from "redux";
import { getUserId } from "../../redux/profile-selector";
import { getUser } from "../../redux/profile-reduser";
import { AppStateType } from "../../redux/redux-store";

type MapPropsType = ReturnType<typeof mapStateToProps>
export type DistatchType = {  
  getUser:(userId: number)=> void  
}
type PathParamsType = {
  userId: string,
}
type PropsType = MapPropsType & DistatchType & RouteComponentProps<PathParamsType>

class ProfileConteiner extends React.Component<PropsType>{
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
    userId: getUserId(state),
  };
};

export default compose(
  withAuthRedirect,
  withRouter,
  connect(mapStateToProps, {  getUser })
)(ProfileConteiner);
