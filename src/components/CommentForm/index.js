import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import CommentForm from './component';

class Container extends Component {
    state = {
        comment: '',
    }

    handleChange = (e) => {
        const { target: { name, value } } = e;
        this.setState({
            [name]: value,
        });
    }

    handleKeyPressed = (e) => {
        const { onAddComment, nickname } = this.props;
        const { comment } = this.state;
        const { key } = e;
        const date = moment().format('YYYY-MM-DDTHH:mm:ssZ');
        const name = nickname;
        if (key === 'Enter' && !e.shiftKey) {
            if (comment === '') {
                this.setState({
                    comment: '',
                });
                alert('메세지를 입력하세요.'); // eslint-disable-line no-alert

                return;
            }
            onAddComment(
                name, comment, date,
            );
            this.setState({
                comment: '',
            });
            e.preventDefault();
        }
    }

    render() {
        const { comment } = this.state;
        const {
            handleChange,
            handleKeyPressed,
        } = this;
        return (
            <CommentForm
                comment={comment}
                handleChange={handleChange}
                handleKeyPressed={handleKeyPressed}
            />
        );
    }
}
Container.propTypes = {
    onAddComment: PropTypes.func.isRequired,
    nickname: PropTypes.string.isRequired,
};

export default Container;
