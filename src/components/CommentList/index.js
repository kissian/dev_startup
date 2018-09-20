import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import Moment from 'components/Moment';
import './styles.scss';

const CommentList = ({
    comments,
}) => (
    <Col lg={12} className="comments">
        <ul className="list-unstyled">
            { comments.map(({
                id, name, comment, date,
            }) => (
                <li key={id}>
                    <p className="hidden-user">
                        {name}
                    </p>
                    <span className="hidden-text">
                        {comment}
                    </span>
                    <div className="hidden-box">
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
