import React from "react";
import { Field, reduxForm } from "redux-form";
import styles from "./Login.module.css";
import { Input } from "../../common/FormsControls/FormsControls";
import { reaquired } from "../../helpers/validators/validators";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"login"}
          name={"email"}
          component={Input}
          validate={[reaquired]}
        />
      </div>
      <div>
        <Field
          placeholder={"password"}
          type={"password"}
          name={"password"}
          component={Input}
          validate={[reaquired]}
        />
      </div>
      {props.error && <div className={styles.formSummaryError}>{props.error}</div>}
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={Input} />
        remember me
      </div>
      <button>submit</button>
    </form>
  );
};

export default reduxForm({ form: "login" })(LoginForm);
