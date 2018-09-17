import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faThLarge, faBell } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.scss';

const NaviToggle = ({
  toggle,
  isToggleOn,
  logout,
}) => (
  <ul className={styles.navWrap}>
    <li className={styles.list}>
        <Link to="/user">
            <FontAwesomeIcon icon={faUser}/>                            
        </Link>
    </li>
    <li className={styles.list}>
        <Link to="/blog">
            <FontAwesomeIcon icon={faThLarge}/>
        </Link>
    </li>
    <li className={styles.list}>
        <Link to="/" onClick={logout}>
            LOGOUT
        </Link>
    </li>
    <li className={styles.list}>
        <Link to="#" onClick={toggle}>
            <FontAwesomeIcon icon={faBell}/>
        </Link>
        {isToggleOn ? 
        <ul className={styles.dropNemu}>
            <li>
                <div>
                    asdasdasdasdasd
                </div>
            </li>
            <li>
                <div>
                    asdasdasdasd
                </div>
            </li>
            <li>
                <div>
                    asdasdasd
                </div>
            </li>
            <li  className={styles.lastList}>
                <Link to="bellall">
                    알람 메세지 모두보기
                </Link>
            </li>
        </ul> : 
        <ul className={styleMedia.none}></ul>
        }
    </li>
  </ul>
)

export default NaviToggle;