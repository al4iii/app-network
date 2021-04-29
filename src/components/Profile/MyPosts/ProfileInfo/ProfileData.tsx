import React from "react";
import { contactsType, profileType } from "../../../../types/types";
import styles from "./ProfileInfo.module.css";

type PropsType = {
  profile: profileType
  isOwner: boolean
  goToEditMode: ()=> void
}

const ProfileData: React.FC<PropsType> = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div className={styles.profile_info}>
      <div className={styles.profile_item}>
        <span className={styles.profile_span}>Full mame:</span>
        {profile.fullName}
      </div>
      <div className={styles.profile_item}>
        <span className={styles.profile_span}>id: </span>
        {profile.userId}
      </div>
      <div className={styles.profile_item}>
        <span className={styles.profile_span}>About me: </span>
        {profile.aboutMe}
      </div>
      <div className={styles.profile_item}>
        <span className={styles.profile_span}>Look for a job: </span>
        {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob && (
        <div className={styles.profile_item}>
          <span className={styles.profile_span}>My professional skills:</span>
          {profile.lookingForAJobDescription}
        </div>
      )}
      <div className={styles.profile_item}>
        <span className={styles.profile_span}>Contact: </span>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof contactsType]} />
          );
        })}
      </div>
      <div>
        {isOwner && (
          <div>
            <button onClick={goToEditMode}>edit</button>
          </div>
        )}
      </div>
    </div>
  );
};

type PropsContactType = {
  contactTitle: string
  contactValue: string | null
}
export const Contact: React.FC<PropsContactType> = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <span className={styles.profile_span}> {contactTitle}</span>:
      {contactValue}
    </div>
  );
};

export default ProfileData;
