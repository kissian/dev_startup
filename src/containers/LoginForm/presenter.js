import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from 'shared/formStyles.scss';


const LoginForm = ({
    email,
    password,
    handleChange,
    handleSubmit,
}) => (
    <div className={styles.formComponent}>
        <form className={styles.form} onSubmit={handleSubmit}>
            <input 
                className={styles.textInput} 
                type="email" 
                placeholder="email" 
                value={email} 
                onChange={handleChange}
                name="email"
            />
            <input 
                className={styles.textInput} 
                type="password" 
                placeholder="Password" 
                vlaue={password}
                onChange={handleChange}
                name="password"
            />
            <input 
                className={styles.button} 
                type="submit" 
                value="LOGIN"
            />
        </form>
        <span className={styles.divider}>or</span>
        <span className={styles.terms}>Forget password?</span>
    </div>
);

LoginForm.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}

export default LoginForm;