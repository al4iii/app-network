import React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";
import {
  createField,
  GetStringKeys,
  Input,
  Textarea,
} from "../../../../common/FormsControls/FormsControls";
import { profileType } from "../../../../types/types";
import styles from "./ProfileInfo.module.css";

type PropsType = {
  isOwner: boolean;
  profile: profileType;
};
type PropsTypeKeys = GetStringKeys<profileType>;

const ProfileDataForm: React.FC<
  InjectedFormProps<profileType, PropsType> & PropsType> = ({ handleSubmit, profile, isOwner, error }) => {
  console.log("profile");
  return (
    <form onSubmit={handleSubmit}>
      {isOwner && (
        <form className={styles.profile_info}>
          <div className={styles.profile_item}>
            <span className={styles.profile_span}>
              Full name:{" "}
              {createField<PropsTypeKeys>("Full mame", "fullName", [], Input)}
            </span>
          </div>
          <div className={styles.profile_item}>
            <span className={styles.profile_span}>
              Look for a job:
              {createField<PropsTypeKeys>(
                "",
                "lookingForAJob",
                [],
                Input,
                "checkbox"
              )}
            </span>
          </div>
          <div className={styles.profile_item}>
            <span className={styles.profile_span}>My professional skills:</span>
            {createField<PropsTypeKeys>(
              "enter your skill",
              "lookingForAJobDescription",
              [],
              Textarea,
              ""
            )}
          </div>
          <div className={styles.profile_item}>
            <span className={styles.profile_span}>About me:</span>
            {createField<PropsTypeKeys>(
              "enter about me",
              "aboutMe",
              [],
              Textarea,
              ""
            )}
          </div>
          <div className={styles.profile_item}>
            <span className={styles.profile_span}>Contact: </span>
            {Object.keys(profile.contacts).map((key) => {
              console.log(key);
              return (
                <div key={key}>
                  <b>{key}</b>:{" "}
                  {createField(key, `contacts.${key}`, [], Textarea, "")}
                </div>
              );
            })}
          </div>
        </form>
      )}
      <div>
        {error && <div>{error}</div>}
        {isOwner && (
          <div>
            <button>save</button>
          </div>
        )}
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm<profileType, PropsType>({
  form: "editProfile",
})(ProfileDataForm);

export default ProfileDataFormReduxForm;
