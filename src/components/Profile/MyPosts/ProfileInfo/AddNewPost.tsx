import React from "react";
import styles from "./ProfileInfo.module.css";
import Button from "../../../../common/Button/Button";
import { InjectedFormProps, reduxForm } from "redux-form";
import { reaquired, maxLengthCreater } from "../../../../helpers/validators/validators";
import { createField, GetStringKeys, Textarea } from "../../../../common/FormsControls/FormsControls";

type PropsType={}
export type AddNewPostFormType = {
  newPostText: string;
  addPosts: ()=> void
};

type AddNewPostFormTypeKeys = GetStringKeys<AddNewPostFormType>

const maxLength10 = maxLengthCreater(10);
const AddNewPost:React.FC< InjectedFormProps<AddNewPostFormType, PropsType> & PropsType> = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className={styles.enter}>
      <div>
        <div className={styles.textarea}>
          {createField<AddNewPostFormTypeKeys>("enter post", "newPostText", [reaquired,maxLength10], Textarea)}
        </div>
        <div className={styles.button}>
          <Button text={"add post"} />
        </div>
      </div>
    </form>
  );
};

const AddNewPostRedux = reduxForm<AddNewPostFormType,PropsType >({ form: "newPostText" })(AddNewPost);
export default AddNewPostRedux;
