import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import SideMenu from 'containers/SideMenu';
// import { Link } from 'react-router-dom';
import Boards from 'containers/Boards';

import styles from './styles.scss';

class Main extends Component {

    render() {
        return (
            <div className={styles.root}>
                <div className={styles.contants}>
                    {/* <BlogCard /> */}
                    <div className={styles.col6}>
                        {/* <Boards /> */}
                        <div className={styles.boxboxbox}>asdasdasd</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;