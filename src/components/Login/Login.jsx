import React from "react";
import LoginForm from "./LoginReduxForm";
import styles from "./Login.module.css";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reduser";
import { Redirect } from "react-router";

const Login = ({ login, isAuth, captchaUrl }) => {
  if (isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h3>Login</h3>
      <LoginForm
        onSubmit={(value) => login(value.email, value.password, value.rememberMe, value.captcha)}
        captchaUrl={captchaUrl}
      />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { login })(Login);
