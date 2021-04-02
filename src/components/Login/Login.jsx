import React from "react";
import { connect } from "react-redux";
import styles from "./Login.module.css";
import { login } from "../../redux/auth-reduser";
import LoginForm from "./LoginReduxForm";
import { Redirect } from "react-router";

const Login = (props) => {
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h3>Login</h3>
      <LoginForm
        onSubmit={(value) =>
          props.login(value.email, value.password, value.rememberMe)
        }
      />
    </div>
  );
};
let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};
export default connect(mapStateToProps, { login })(Login);
