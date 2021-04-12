import React from "react";
import styles from "./ProfileInfo.module.css";
import Button from "../../../../common/Button/Button";
import { Field, reduxForm } from "redux-form";
import { reaquired, maxLengthCreater } from "../../../../helpers/validators/validators";
import { Textarea } from "../../../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreater(10);

const AddNewPost = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className={styles.enter}>
      <div>
        <div className={styles.textarea}>
          <Field
            className={styles.form}
            placeholder="enter post"
            name={"newPostText"}
            component={Textarea}
            validate={[reaquired, maxLength10]}
          />
        </div>
        <div className={styles.button}>
          <Button text={"add post"} />
        </div>
      </div>
    </form>
  );
};
const AddNewPostRedux = reduxForm({ form: "newPostText" })(AddNewPost);

export default AddNewPostRedux;
