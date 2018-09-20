import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Button } from '@material-ui/core';
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
    showToggleMenu,
    likeCount,
    open,
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
                    <div className={styles.toggleWrap}>
                        <IconButton 
                            aria-label="square"
                            onClick={showToggleMenu}
                        >
                            <i className="fas fa-ellipsis-h" style={{fontSize: '12px'}}></i>
                        </IconButton>
                        {
                            open ? (
                                <div className={styles.toggleMenuWrap}>
                                    <Button type="button">비공개</Button>
                                    <Button type="button" onClick={onRemovePost}>삭제</Button>
                                </div>
                            ) : null
                        }
                       
                    </div>
                </div>
                <div className={styles.flexRowCenter}>
                    <div style={{ flex: '1 1 0' }}>
                        <span>
                            {whether}
                            {' '}
                            <Moment date={date} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div style={{ marginTop: 6, flex: '1 1 0' }}>
            <span className={styles.textsSpace}>
                {title}
            </span>
        </div>
        <div style={{ marginTop: 6 }}>
            {
                history ? <img className="img-responsive" src={history} alt={history} /> : null
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
    showToggleMenu: PropTypes.func.isRequired,
    likeCount: PropTypes.number.isRequired,
    open: PropTypes.bool.isRequired,
};

export default TimelineItem;
