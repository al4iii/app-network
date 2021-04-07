import React from "react";
import styles from "./Login.module.css";
import { reduxForm } from "redux-form";
import { createField, Input } from "../../common/FormsControls/FormsControls";
import { reaquired } from "../../helpers/validators/validators";

const LoginForm = ({ handleSubmit, error }) => {  
  return (
    <form onSubmit={handleSubmit}>
      {createField("login", "email", [reaquired], Input)}
      {createField("password", "password", [reaquired], Input, "password")}
      {error && <div className={styles.formSummaryError}>{error}</div>}
      {createField("", "rememberMe", [], Input, "checkbox")}
      remember me
      <div>
        <button>submit</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "login" })(LoginForm);
