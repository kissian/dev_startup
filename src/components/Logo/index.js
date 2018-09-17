import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';
const Logo = props => (
  <div className={styles.logo}>
    <Link to="/">
        STENCIL WOW
    </Link>
  </div>
)

export default Logo;