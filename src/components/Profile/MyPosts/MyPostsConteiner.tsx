import { connect } from "react-redux";
import { AppStateType } from "../../../redux/redux-store";
import { postsType } from "../../../types/types";
import MyPosts from "./MyPosts";

let mapStateToPtops = (state:AppStateType) => {
  return {
    posts: state.profilePage.posts,
    myProfilePhoto: state.profilePage.myProfilePhoto,
  } as MapStatePropsType
};
type MapStatePropsType={
  posts: Array<postsType>
  myProfilePhoto: string
}
export default connect<MapStatePropsType, {}, {}, AppStateType>(mapStateToPtops, {})(MyPosts);
