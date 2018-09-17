import React from "react";
import styles from "./styles.scss";
import Logo from '../Logo';
import LoginForm from 'containers/LoginForm';
import SignupForm from 'containers/SignupForm';

const Auth = props => (
  <main className={styles.auth}>
    <div className={styles.column}>
      <img src={require("images/phone.png")} alt="Checkout our app. Is cool" />
    </div>
    <div className={styles.column}>
      <div className={`${styles.whiteBox} ${styles.formBox}`}>
        <h1>
          <Logo/>
        </h1>
        {props.action === "login" && <LoginForm/>}
        {props.action === "signup" && <SignupForm/>}
      </div>
      <div className={styles.whiteBox}>
        {props.action === "login" && (
            <p>
                Don't have an account?{" "}
                <span
                className={styles.changeLink}
                onClick={props.changeAction}
                >
                Sign up
                </span>
            </p>
        )}
        {props.action === "signup" && (
            <p>
                Have an account?{" "}
                <span
                className={styles.changeLink}
                onClick={props.changeAction}
                >
                Log in
                </span>
            </p>
        )}
      </div>
    </div>
  </main>
);

export default Auth;