import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styles from "./Login.module.css";
import { authentication } from "../../redux/auth-reduser";

const Login = (props) => {
  return (
    <div>
      <h3>Login</h3>
      <LoginFReduxForm
        onSubmit={(value) =>
          props.authentication(value.email, value.password, value.rememberMe)
        }
      />
    </div>
  );
};
let mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, { authentication })(Login);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"login"} name={"email"} component={"input"} />
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
