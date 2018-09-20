import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Button, ButtonGroup } from 'react-bootstrap';
import styles from './styles.scss';

class VisiblePostActionBtn extends Component {
    render() {
        const {
            like, showComment, onToggleLike, onToggleComment,
        } = this.props;
        return (
            <Col lg={12} className={styles.bordBody}>
                <ButtonGroup className={styles.actionBtnGroup}>
                    <Button className={styles.actionBtn} onClick={onToggleLike}>
                        {
                            like ? <i className="fas fa-heart" style={{ color: 'red' }} /> : <i className="far fa-heart" />
                        }
                    </Button>
                    <Button className={styles.actionBtn} onClick={onToggleComment}>
                        {
                            showComment ? <i className="fas fa-comment" /> : <i className="far fa-comment" />
                        }
                    </Button>
                    <Button className={styles.actionBtn}>
                        <i className="far fa-share-square" />
                    </Button>
                </ButtonGroup>
            </Col>
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
