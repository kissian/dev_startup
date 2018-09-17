import React from 'react';
import PropTypes from 'prop-types';
import styles from 'shared/formStyles.scss';

const SignupForm = ({
    email,
    password,
    firstName,
    lastName,
    handleChangeInput,
    handleSubmit,
}) => (
    <div className={styles.formComponent}>
        <h3 className={styles.signupHeader}>
            Sign up to see photos and videos from your friends.
        </h3>

        <span className={styles.divider}>or</span>
        <form className={styles.form} onSubmit={handleSubmit}>
            <input 
                className={styles.textInput} 
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={handleChangeInput}
                name="email"
            />
            <input 
                className={styles.textInput} 
                type="text" 
                placeholder="firstName"
                value={firstName}
                onChange={handleChangeInput}
                name="firstName"
            />
            <input 
                className={styles.textInput} 
                type="text" 
                placeholder="lastName"
                value={lastName}
                onChange={handleChangeInput}
                name="lastName"
            />
            <input 
                className={styles.textInput} 
                type="password" 
                placeholder="Password"
                value={password}
                onChange={handleChangeInput}
                name="password"
            />
            <input className={styles.button} type="submit" value="SIGN UP"/>
        </form>
        <p className={styles.terms}>
            By signing up, you agree to our<span>Terms & Privacy Policy</span>
        </p>
    </div>
);

SignupForm.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    handleChangeInput: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}

export default SignupForm;