import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import styles from './styles.scss';

class VisiblePostActionBtn extends Component {
    render() {
        const {
            like, showComment, onToggleLike, onToggleComment, classes
        } = this.props;

        return (
            <div className={styles.bordBody}>
                <IconButton 
                    aria-label="heart"
                    onClick={onToggleLike}>
                    {
                        like ? <i className="fas fa-heart" style={{ color: 'red' }} /> : <i className="far fa-heart" />
                    }
                </IconButton>
                <IconButton 
                    aria-label="comment"
                    onClick={onToggleComment}>
                    {
                        showComment ? <i className="fas fa-comment" /> : <i className="far fa-comment" />
                    }
                </IconButton>
                <IconButton 
                    aria-label="square"
                >
                    <i className="far fa-share-square" />
                </IconButton>
            </div>
        );
    }
}
VisiblePostActionBtn.defaultProps = {
    like: false,
    showComment: false,
    onToggleLike: () => null,
    onToggleComment: () => null,
};
VisiblePostActionBtn.propTypes = {
    like: PropTypes.bool,
    showComment: PropTypes.bool,
    onToggleLike: PropTypes.func,
    onToggleComment: PropTypes.func,
};

export default VisiblePostActionBtn;
