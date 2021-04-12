import React from "react";
import { reduxForm } from "redux-form";
import { createField, Input, Textarea } from "../../../../common/FormsControls/FormsControls";
import { Contact } from "./ProfileData";
import styles from "./ProfileInfo.module.css";

const ProfileDataForm = ({ handleSubmit, profile, goToExitEditMode, isOwner, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {!isOwner && (
        <form className={styles.profile_info}>
          <div className={styles.profile_item}>
            <span className={styles.profile_span}>
              Full name: {createField("Full mame", "fullName", [], Input)}
            </span>
          </div>
          <div className={styles.profile_item}>
            <span className={styles.profile_span}>
              Look for a job:
              {createField("", "lookingForAJob", [], Input, "checkbox")}
            </span>
          </div>
          <div className={styles.profile_item}>
            <span className={styles.profile_span}>My professional skills:</span>
            {createField( "enter your skill", "lookingForAJobDescription", [], Textarea, "" )}
          </div>
          <div className={styles.profile_item}>
            <span className={styles.profile_span}>About me:</span>
            {createField("enter about me", "aboutMe", [], Textarea, "")}
          </div>
          <div className={styles.profile_item}>
        <span className={styles.profile_span}>Contact: </span>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key}> 
                <b>{key}</b>: {createField( key , `contacts.${key}`, [], Textarea, "")}
            </div>
          );
        })}
      </div>
        </form>
      )}
      <div>
      {error && <div>{error}</div>}
        {!isOwner && (
          <div>
            <button>save</button>
          </div>
        )}
        
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: "editProfile" })( ProfileDataForm);

export default ProfileDataFormReduxForm;
