import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostListItem from './presenter';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            like: false,
            open: false,
        }
    }

    handleAddComment = _id => (name, comment, date) => {
        const { addComment } = this.props;
        addComment(_id, name, comment, date);
    }

    handleToggleComment = _id => () => {
        const { showComment } = this.state;
        const { togglePostComment } = this.props;
        togglePostComment(_id);
        this.setState({
            showComment: !showComment,
        });
    }

    handleRemovePost = _id => () => {
        const { removePost } = this.props;
        removePost(_id);
    }

    handleHeartToggle = _id => () => {
        const { like, likeCount } = this.state;
        const { togglePostLike } = this.props;
        togglePostLike(_id);
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

    showToggleMenu = (e) => {
        e.preventDefault();
        this.setState({ open: true }, () => {
            document.addEventListener('click', this.closeToggleMenu);
        });
    }
    closeToggleMenu = () => {
        this.setState({ open: false }, () => {
            document.removeEventListener('click', this.closeToggleMenu);
        });
    }

    render() {
        const { like, open } = this.state;
        const {
            _id,
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
            user
        } = this.props;
        const {
            handleAddComment,
            handleRemovePost,
            handleHeartToggle,
            handleToggleComment,
            showToggleMenu,
        } = this;
        return (
            <PostListItem
                _id={_id}
                id={id}
                user={user}
                title={title}
                date={date}
                nickname={nickname}
                whether={whether}
                comments={comments}
                history={history}
                profileImage={profileImage}
                like={like}
                open={open}
                showComment={showComment}
                likeCount={likeCount}
                onAddComment={handleAddComment}
                onRemovePost={handleRemovePost}
                onToggleLike={handleHeartToggle}
                onToggleComment={handleToggleComment}
                showToggleMenu={showToggleMenu}
            />
        );
    }
}

Container.defaultProps = {
    showComment: false,
    whether: '',
};

Container.propTypes = {
    user: PropTypes.object.isRequired,
    _id: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
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
