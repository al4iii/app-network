import React from "react";
import styles from "./Login.module.css";
import { InjectedFormProps, reduxForm } from "redux-form";
import { createField, Input } from "../../common/FormsControls/FormsControls";
import { reaquired } from "../../helpers/validators/validators";
import { NavLink } from "react-router-dom";

type LoginFormOwnType = {
  captchaUrl: string | null;
};
export type LoginFormType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
};

type LoginFormTypeKeys = keyof LoginFormType

const LoginForm: React.FC< InjectedFormProps<LoginFormType, LoginFormOwnType> & LoginFormOwnType> = 
({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField<LoginFormTypeKeys>("login", "email", [reaquired], Input)}
      {createField<LoginFormTypeKeys>("password", "password", [reaquired], Input, "password")}
      {captchaUrl && <img src={captchaUrl} />}
      {captchaUrl &&
        createField<LoginFormTypeKeys>("symbol from img", "captcha", [reaquired], Input, "", {})}
      {error && <div className={styles.formSummaryError}>{error}</div>}
      {createField<LoginFormTypeKeys>("", "rememberMe", [], Input, "checkbox")}
      remember me
      <div>
        <button>submit</button>
      </div>         
    </form>
    

  );
};

export default reduxForm<LoginFormType, LoginFormOwnType>({ form: "login" })(LoginForm);
