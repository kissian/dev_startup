import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import Moment from 'components/Moment';
import styles from './styles.scss';

const CommentList = ({
    comments,
}) => (
    <Col lg={12} className={styles.comments}>
        <ul className={styles.listUnstyled}>
            { comments.map(({
                id, name, comment, date,
            }) => (
                <li key={id}>
                {console.log(id, name, comment, date)}
                    <div className={styles.commentWrap}>
                        <span className={styles.hiddenUser}>
                            {name}
                        </span>
                        <span className={styles.hiddenText}>
                            {comment}
                        </span>
                    </div>
                    <div className={styles.hiddenBox}>
                        <Moment date={date} />
                    </div>
                </li>
            ))
            }
        </ul>
    </Col>
);
CommentList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
    })).isRequired,
};

export default CommentList;
