import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import CommentForm from 'components/CommentForm';
import CommentList from 'components/CommentList';

import ActionBtn from 'components/VisiblePostActionBtn';
import TimelineItem from 'components/TimelineItem';
import styles from './styles.scss';

const PostListItem = ({
    user,
    id,
    like,
    open,
    showComment,
    title,
    date,
    nickname,
    whether,
    comments,
    history,
    profileImage,
    likeCount,
    onAddComment,
    onRemovePost,
    onToggleLike,
    onToggleComment,
    showToggleMenu,
}) => (
    <Col lg={12} key={id} className={styles.itemInner}>
        <TimelineItem
            onRemovePost={onRemovePost(id)}
            nickname={nickname}
            profileImage={profileImage}
            date={date}
            title={title}
            history={history}
            whether={whether}
            comments={comments}
            likeCount={likeCount}
            open={open}
            showToggleMenu={showToggleMenu}
        />
        <ActionBtn
            like={like}
            showComment={showComment}
            onToggleLike={onToggleLike(id)}
            onToggleComment={onToggleComment(id)}
        />
        <div>
            {
                showComment && (
                    <Row>
                        <Col lg={12}>
                            <CommentList comments={comments} />
                        </Col>
                        <Col lg={12}>
                            <CommentForm
                                user={user}
                                onAddComment={onAddComment(id)}
                                nickname={nickname}
                            />
                        </Col>
                    </Row>
                )
            }
        </div>
    </Col>
);
PostListItem.defaultProps = {
    showComment: false,
};

PostListItem.propTypes = {
    user: PropTypes.object.isRequired,
    _id: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    nickname: PropTypes.string.isRequired,
    profileImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    history: PropTypes.string.isRequired,
    whether: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    showComment: PropTypes.bool,
    like: PropTypes.bool.isRequired,
    open: PropTypes.bool.isRequired,
    likeCount: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
    onAddComment: PropTypes.func.isRequired,
    onRemovePost: PropTypes.func.isRequired,
    onToggleLike: PropTypes.func.isRequired,
    onToggleComment: PropTypes.func.isRequired,
    showToggleMenu: PropTypes.func.isRequired,
};
export default PostListItem;
