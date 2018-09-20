import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TimelineForm from 'components/TimelineForm';
import PostList from 'components/PostList';

const NewsFeed = ({
    user,
    history,
    title,
    onChange,
    onFileChange,
    onSubmit,
    boards,
}) => (
    <Fragment>
        <TimelineForm
            user={user}
            history={history}
            title={title}
            onChange={onChange}
            onFileChange={onFileChange}
            onSubmit={onSubmit}
        />
        <PostList
            boards={boards}
        />
    </Fragment>
);
NewsFeed.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        profile: PropTypes.shape({
            profileImage: PropTypes.string,
        }).isRequired,
    }).isRequired,
    history: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onFileChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    boards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NewsFeed;
