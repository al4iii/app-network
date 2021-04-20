import React from "react";
import LoginForm, { LoginFormType } from "./LoginReduxForm";
import styles from "./Login.module.css";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reduser";
import { Redirect } from "react-router-dom";
import { AppStateType } from "../../redux/redux-store";

type mapStateToPropsType = {
  captchaUrl: string | null;
  isAuth: boolean;
};
type mapDispatchToPropsType = {
  login: (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
  ) => void;
};


const Login: React.FC<mapStateToPropsType & mapDispatchToPropsType> = ({ login, isAuth, captchaUrl,}) => {
  if (isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div className={styles.login}>
      <h3>Login</h3>
      <LoginForm
        onSubmit={(value: LoginFormType) =>
          login(value.email, value.password, value.rememberMe, value.captcha)
        }
        captchaUrl={captchaUrl}
      />
    </div>
  );
};

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { login })(Login);
