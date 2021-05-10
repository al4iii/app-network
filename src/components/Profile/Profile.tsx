import { FC } from "react";
import ProfileInfoConteiner from "./MyPosts/ProfileInfo/ProfileInfoConteiner";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";
import { profileType } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/profile-selector";

type PropsType = {
  isOwner: boolean
}

const Profile:FC<PropsType> = ({ isOwner }) => {
  const profile = useSelector(getProfile)  
  const dispatch = useDispatch()
  const getStatus = (userId:number)=> {
    dispatch(getStatus(userId))
  }
  const updateStatus = (status: string)=> {
    dispatch(updateStatus(status))
  }
  const addPosts = (newPost: string)=> {
    dispatch(addPosts(newPost))
  }
  const savePhoto = (file: File)=> {
    dispatch(savePhoto(file))
  }
  const saveProfile = (profile: profileType)=> {
    dispatch(saveProfile(profile))
  }
  return (
    <div>
      <ProfileInfoConteiner profile={profile} isOwner={isOwner} getStatus={getStatus}
      updateStatus={updateStatus} addPosts={addPosts} savePhoto= {savePhoto}  saveProfile={saveProfile} />
      <MyPostsConteiner />
    </div>
  );
};

export default Profile;
