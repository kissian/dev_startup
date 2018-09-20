import React from 'react';
import PropTypes from 'prop-types';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import Moment from 'components/Moment';
import styles from './styles.scss';

const TimelineItem = ({
    title,
    date,
    nickname,
    whether,
    comments,
    history,
    profileImage,
    onRemovePost,
    likeCount,
}) => (
    <div className={styles.flexColumn}>
        <div className={styles.flexRowCenter}>
            <div style={{ marginRight: 12 }}>
                <img className="img-circle" src={profileImage} alt="" style={{ width: 48, height: 48 }} />
            </div>
            <div style={{ flex: '1 1 auto' }}>
                <div className={styles.flexRowCenter}>
                    <h4 style={{ flex: '1 1 0' }}>
                        {nickname}
                    </h4>
                    <DropdownButton title={<i className="fas fa-cog" />} id="bg-justified-dropdown">
                        <MenuItem eventKey="1" onClick={onRemovePost}>
                  게시물삭제
                        </MenuItem>
                        <MenuItem eventKey="2">
                  비공개
                        </MenuItem>
                    </DropdownButton>
                </div>
                <div className={styles.flexRowCenter}>
                    <div style={{ flex: '1 1 0' }}>
                        <span
                            className="list-group-item-text text-nowrap-ellipsis"
                        >
                            {whether}
                            {' '}
                            <Moment date={date} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div style={{ marginTop: 6, flex: '1 1 0' }}>
            <span style={{ fontSize: 21, fontWeight: 400 }}>
                {title}
            </span>
        </div>
        <div style={{ marginTop: 6 }}>
            {
                history ? <img className="img-responsive" src={history} alt="..." /> : null
            }
        </div>
        <div style={{ marginTop: 6 }}>
            <span>
                {likeCount}
                {' '}
                {likeCount === 1 ? 'like' : 'likes'}
            </span>
            <span>
        댓글
                {' '}
                {comments.length}
            </span>
            <span>
        공유
                {' '}
            </span>
        </div>
    </div>
);
TimelineItem.defaultProps = {
    comments: [],
    whether: null,
};
TimelineItem.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    whether: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.object),
    history: PropTypes.string.isRequired,
    profileImage: PropTypes.string.isRequired,
    onRemovePost: PropTypes.func.isRequired,
    likeCount: PropTypes.number.isRequired,
};

export default TimelineItem;
