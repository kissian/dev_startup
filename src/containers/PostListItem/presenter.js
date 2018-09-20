import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import CommentForm from 'components/CommentForm';
import CommentList from 'components/CommentList';

import ActionBtn from 'components/VisiblePostActionBtn';
import TImelineItem from 'components/TimelineItem';
import styles from './styles.scss';

const PostListItem = ({
    id,
    like,
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
}) => (
    <Col lg={12} key={id} className={styles.itemInner}>
        <TImelineItem
            onRemovePost={onRemovePost(id)}
            nickname={nickname}
            profileImage={profileImage}
            date={date}
            title={title}
            history={history}
            whether={whether}
            comments={comments}
            likeCount={likeCount}
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
    id: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    profileImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    history: PropTypes.string.isRequired,
    whether: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    showComment: PropTypes.bool,
    like: PropTypes.bool.isRequired,
    likeCount: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
    onAddComment: PropTypes.func.isRequired,
    onRemovePost: PropTypes.func.isRequired,
    onToggleLike: PropTypes.func.isRequired,
    onToggleComment: PropTypes.func.isRequired,
};
export default PostListItem;
