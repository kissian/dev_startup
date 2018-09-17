import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

class SideMenu extends Component {
  render() {
    return (
      <section>
        <div className={styles.sideMenu}>
          <ul>
            <li>
              <Link to="#">
                샬랄라
              </Link>
            </li>
            <li>
              <Link to="#">
                샬랄라
              </Link>
            </li>
            <li>
              <Link to="#">
                샬랄라
              </Link>
            </li>
            <li>
              <Link to="#">
                샬랄라
              </Link>
            </li>
          </ul>
        </div> 
      </section>
    )
  }
}

export default SideMenu;