import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostListItem from './presenter';

class Container extends Component {
    state = {
        like: false,
    }

    handleAddComment = id => (name, comment, date) => {
        const { addComment } = this.props;
        addComment(id, name, comment, date);
    }

    handleToggleComment = id => () => {
        const { showComment } = this.state;
        const { togglePostComment } = this.props;
        togglePostComment(id);
        this.setState({
            showComment: !showComment,
        });
    }

    handleRemovePost = id => () => {
        const { removePost } = this.props;
        removePost(id);
    }

    handleHeartToggle = id => () => {
        const { like, likeCount } = this.state;
        const { togglePostLike } = this.props;

        togglePostLike(id);
        if (like === false) {
            return this.setState({
                like: !like,
                likeCount: likeCount + 1,
            });
        }
        return this.setState({
            like: !like,
            likeCount: likeCount - 1,
        });
    }

    render() {
        const { like } = this.state;
        const {
            id,
            title,
            date,
            nickname,
            whether,
            history,
            profileImage,
            comments,
            showComment,
            likeCount,
        } = this.props;
        const {
            handleAddComment,
            handleRemovePost,
            handleHeartToggle,
            handleToggleComment,
        } = this;
        return (
            <PostListItem
                id={id}
                title={title}
                date={date}
                nickname={nickname}
                whether={whether}
                comments={comments}
                history={history}
                profileImage={profileImage}
                like={like}
                showComment={showComment}
                likeCount={likeCount}
                onAddComment={handleAddComment}
                onRemovePost={handleRemovePost}
                onToggleLike={handleHeartToggle}
                onToggleComment={handleToggleComment}
            />
        );
    }
}

Container.defaultProps = {
    showComment: false,
    whether: '',
};

Container.propTypes = {
    id: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    profileImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    history: PropTypes.string.isRequired,
    whether: PropTypes.string,
    date: PropTypes.string.isRequired,
    showComment: PropTypes.bool,
    likeCount: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
    addComment: PropTypes.func.isRequired,
    removePost: PropTypes.func.isRequired,
    togglePostLike: PropTypes.func.isRequired,
    togglePostComment: PropTypes.func.isRequired,
};
export default Container;
