import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';
import Logo from 'components/Logo';
import LoginTopBar from 'components/LoginTopBar';
import NaviToggle from 'components/NaviToggle';

const Navigation = ({
    toggle,
    isToggleOn,
    isLoggedIn,
    logout,
}) => {
    return (
        <header>
            <nav className={styles.headerNav}>
                <Logo />
                {
                    isLoggedIn ? <NaviToggle toggle={toggle} isToggleOn={isToggleOn} logout={logout} /> : null
                }
            </nav>
        </header>
    )
}

export default Navigation;