import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

const NaviToggle = ({
  toggle,
  isToggleOn,
  logout,
}) => (
  <ul className={styles.navWrap}>
    <li className={styles.list}>
        <Link to="/user">
            <i className="fas fa-user"></i>                           
        </Link>
    </li>
    <li className={styles.list}>
        <Link to="/memo">
            <i className="fab fa-flipboard"></i>
        </Link>
    </li>
    <li className={styles.list}>
        <Link to="/blog">
            <i className="fas fa-th-large"></i>
        </Link>
    </li>
    
    <li className={styles.list}>
        <Link to="#" onClick={toggle}>
            <i className="fas fa-bell"></i>
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

    {/* <li className={styles.list}>
        <Link to="/" onClick={logout}>
            LOGOUT
        </Link>
    </li> */}
  </ul>
)

export default NaviToggle;