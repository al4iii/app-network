import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
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
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
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

export const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <span className={styles.profile_span}> {contactTitle}</span>:{" "}
      {contactValue}
    </div>
  );
};

export default ProfileData;
