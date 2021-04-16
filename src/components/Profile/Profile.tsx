import { FC } from "react";
import styles from "./Profile.module.css";
import ProfileInfoConteiner from "./MyPosts/ProfileInfo/ProfileInfoConteiner";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";
import { profileType } from "../../types/types";

type PropsType = {
  profile: profileType
  isOwner: boolean
};

const Profile:FC<PropsType> = ({ profile, isOwner }) => {
  return (
    <div>
      <ProfileInfoConteiner profile={profile} isOwner={isOwner} />
      <MyPostsConteiner />
    </div>
  );
};

export default Profile;
