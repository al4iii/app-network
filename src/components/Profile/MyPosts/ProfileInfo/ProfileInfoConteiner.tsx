import { connect } from "react-redux";
import { addPosts, getStatus, updateStatus, savePhoto, saveProfile } from "../../../../redux/profile-reduser";
import { AppStateType } from "../../../../redux/redux-store";
import ProfileInfo from "./ProfileInfo";

let mapStateToPtops = (state: AppStateType) => {
  return {    
    status: state.profilePage.status,
    myId: state.auth.userId,
  } as MapStatePropsType
};
type MapStatePropsType ={
  status: string
  myId: number
}

export default connect<MapStatePropsType, {}, {}, AppStateType>(mapStateToPtops, { addPosts, getStatus, updateStatus, savePhoto, saveProfile })( ProfileInfo );
