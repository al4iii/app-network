import { ChangeEvent, useState } from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import user from "./../../../../img/user-male.png";
import AddNewPostRedux, { AddNewPostFormType } from "./AddNewPost";
import ProfileData from "./ProfileData";
import ProfileDataFormReduxForm from "./ProfileDataForm";
import { profileType } from "../../../../types/types";

type PropsType = {
  profile: profileType
  status: string
  getStatus: () => void,
  myId: number
  updateStatus: (status: string) => void
  addPosts: (message: string) => void
  isOwner: boolean
  savePhoto: (file: any) => void
  saveProfile: (profile:profileType) => Promise<any>
  }

const ProfileInfo: React.FC<PropsType> = ({ profile, status, getStatus, myId, updateStatus, addPosts, isOwner, savePhoto, saveProfile }) => {
  let [editMode, setEditMode] = useState(false);
  if (!profile) {
    return <Preloader />;
  }
  const onMailPhotoSelect = (e: ChangeEvent<HTMLInputElement>) => {    
    if (e.target.files && e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  };
  const onSubmit = (formData: profileType) => {
    //todo 
    saveProfile(formData).then(() => {setEditMode(false)});
  };
  return (
    <div className={styles.myPosts}>
      <div className={styles.profile}>
        <img src={profile.photos.large || user} className={styles.profile_img} alt={"photos"} />
        {isOwner && (
          <div className={styles.profile_addPhoto}>
            <input type={"file"} onChange={onMailPhotoSelect} />              
          </div>
        )}
        {isOwner && ( <ProfileStatusWithHooks status={status}
            getStatus={getStatus} myId={myId} userId={profile.userId} updateStatus={updateStatus}
          />
        )}
        {editMode ? ( <ProfileDataFormReduxForm isOwner={isOwner} initialValues={profile} profile={profile} onSubmit={onSubmit} />
        ) : (<ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)} /> )}
        <AddNewPostRedux onSubmit={(value:AddNewPostFormType) => addPosts(value.newPostText)} />
      </div>
    </div>
  );
};

export default ProfileInfo;
