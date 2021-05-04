import React from "react";
import LoginForm, { LoginFormType } from "./LoginReduxForm";
import styles from "./Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth-reduser";
import { Redirect } from "react-router-dom";
import { getCaptchaUrl, getIsAuth } from "./login-selector";

export const Login: React.FC = (props) => {
  const captchaUrl = useSelector(getCaptchaUrl)
  const isAuth = useSelector(getIsAuth)
  const dispatch = useDispatch()
  const onSubmit = (formData: LoginFormType)=>{
    dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
  } 
  if (isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div className={styles.login}>
      <h3>Login</h3>
      <LoginForm
        onSubmit={onSubmit}
        captchaUrl={captchaUrl}
      />
    </div>
  );
};
