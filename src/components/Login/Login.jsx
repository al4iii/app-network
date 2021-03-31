import React from "react";
import { Field, reduxForm } from "redux-form";
import styles from "./Login.module.css";

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <h3>Login</h3>
      <LoginFReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"login"} name={"login"} component={"input"} />
      </div>
      <div>
        <Field placeholder={"password"} name={"password"} component={"input"} />
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={"input"} />
        remember me
      </div>
      <button>submit</button>
    </form>
  );
};

const LoginFReduxForm = reduxForm({ form: "login" })(LoginForm);
