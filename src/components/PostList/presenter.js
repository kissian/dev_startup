import React from 'react';
import PropTypes from 'prop-types';
import Waypoint from 'react-waypoint';
import PostListItem from 'containers/PostListItem';
import LoadingTimeline from 'components/Loadings/LoadingTimeline';

const PostList = ({
    boards,
    loading,
    onEnter,
}) => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        {
            boards.map(({
                _id,
                index,
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
            }) => (
                <PostListItem
                    key={index}
                    _id={_id}
                    id={index}
                    nickname={nickname}
                    profileImage={profileImage}
                    date={date}
                    title={title}
                    history={history}
                    whether={whether}
                    comments={comments}
                    likeCount={likeCount}
                    like={like}
                    showComment={showComment}
                />
            ))
        }
        {loading && <LoadingTimeline />}
        <Waypoint
            topOffset={50}
            bottomOffset={50}
            onEnter={onEnter}
        />
    </div>
);


PostList.propTypes = {
    boards: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        index: PropTypes.number.isRequired,
        title: PropTypes.string,
        date: PropTypes.string,
        nickname: PropTypes.string,
        whether: PropTypes.string,
        comments: PropTypes.array,
        history: PropTypes.string,
        profileImage: PropTypes.string,
        likeCount: PropTypes.number,
    })).isRequired,
    onEnter: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default PostList;
