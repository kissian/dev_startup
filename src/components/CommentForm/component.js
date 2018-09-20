import React from 'react';
import PropTypes from 'prop-types';
import { Row, FormGroup, FormControl } from 'react-bootstrap';
import styles from './styles.scss';

const CommentForm = ({
    comment,
    handleChange,
    handleKeyPressed,
}) => (
    <form className={styles.addCommit}>
        <FormGroup>
            <Row>
                <FormControl
                    componentClass="textarea"
                    className="textarea-option"
                    name="comment"
                    value={comment}
                    placeholder="메세지를 입력해주세요..."
                    onChange={handleChange}
                    onKeyPress={handleKeyPressed}
                />
            </Row>
        </FormGroup>
    </form>
);
CommentForm.propTypes = {
    comment: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleKeyPressed: PropTypes.func.isRequired,
};

export default CommentForm;
