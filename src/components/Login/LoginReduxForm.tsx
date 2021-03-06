import React from "react";
import styles from "./Login.module.css";
import { InjectedFormProps, reduxForm } from "redux-form";
import {
  createField,
  GetStringKeys,
  Input,
} from "../../common/FormsControls/FormsControls";
import { reaquired } from "../../helpers/validators/validators";

type LoginFormOwnType = {
  captchaUrl: string | null;
};
export type LoginFormType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
};
type LoginFormTypeKeys = GetStringKeys<LoginFormType>;

const LoginForm: React.FC<
  InjectedFormProps<LoginFormType, LoginFormOwnType> & LoginFormOwnType> = ({ handleSubmit, error, captchaUrl }) => {  
  return (
    <form onSubmit={handleSubmit}>
      {createField<LoginFormTypeKeys>("login", "email", [reaquired], Input)}
      {createField<LoginFormTypeKeys>(
        "password",
        "password",
        [reaquired],
        Input,
        "password"
      )}
      {captchaUrl && <img src={captchaUrl} alt={"captchaUrl"} />}
      {captchaUrl &&
        createField<LoginFormTypeKeys>(
          "symbol from img",
          "captcha",
          [reaquired],
          Input,
          "",
          {}
        )}
      {error && <div className={styles.formSummaryError}>{error}</div>}
      {createField<LoginFormTypeKeys>(
        "",
        "rememberMe",
        [],
        Input,
        "checkbox"
      )}{" "}
      remember me
      <div>
        <button>Submit</button>
        <button style={{ margin: "10px" }}>
          {" "}
          <a href="https://social-network.samuraijs.com/signUp">Sing Up</a>
        </button>
      </div>
    </form>
  );
};

export default reduxForm<LoginFormType, LoginFormOwnType>({ form: "login" })(
  LoginForm
);
