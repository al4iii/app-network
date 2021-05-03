import { FC } from "react";
import ProfileInfoConteiner from "./MyPosts/ProfileInfo/ProfileInfoConteiner";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";
import { profileType } from "../../types/types";

type PropsType = {
  profile: profileType
  isOwner: boolean
  getStatus: ()=> void
  updateStatus: ()=> void
  addPosts: ()=> void
  savePhoto: ()=> void
  saveProfile: (profile: profileType)=> Promise<any>
 };

const Profile:FC<PropsType> = ({ profile, isOwner, getStatus,updateStatus,  addPosts,savePhoto, saveProfile}) => {
  return (
    <div>
      <ProfileInfoConteiner profile={profile} isOwner={isOwner} getStatus={getStatus}
      updateStatus={updateStatus} addPosts={addPosts} savePhoto= {savePhoto}  saveProfile={saveProfile} />
      <MyPostsConteiner />
    </div>
  );
};

export default Profile;
