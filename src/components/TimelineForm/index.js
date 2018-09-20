import React from 'react';
import PropTypes from 'prop-types';
import {
    Row, Col, ButtonGroup,
    FormGroup, FormControl, Button,
} from 'react-bootstrap';
import Files from 'react-files';
import styles from './styles.scss';

const TimelineForm = ({
    user,
    history,
    title,
    onChange,
    onFileChange,
    onSubmit,
}) => (
    <form className={styles.addCommit} onSubmit={onSubmit}>
        <FormGroup>
            <div
                className={styles.timelineBox}
            >
                <Row>
                    <Col lg={2}>
                        <img
                            className="img-circle"
                            src={
                                user.profile.profileImage === undefined ? '../assets/img/default/default_user.png' : user.profile.profileImage
                            }
                            width="40"
                            height="40"
                            alt={user.name}
                        />
                    </Col>
                    <Col lg={10}>
                        <FormControl
                            componentClass="textarea"
                            className="textarea-option"
                            name="title"
                            value={title}
                            placeholder="상태메세지를 입력해주세요."
                            onChange={onChange}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={3}>
                        <img
                            className="img-responsive"
                            src={history === '' ? null : history}
                            width="100%"
                            alt=""
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <ButtonGroup>
                            <Files
                                className="files-dropzone"
                                onChange={onFileChange}
                                accepts={['image/png', '.pdf', 'audis/*']}
                                multiple
                                maxFiles={3}
                                maxFileSize={10000000}
                                minFileSize={0}
                                clickable
                            >
                                <Button type="button">
                                    <i className="fas fa-camera" />
                                </Button>
                            </Files>
                        </ButtonGroup>
                        <ButtonGroup>
                            <FormControl
                                componentClass="select"
                                name="whether"
                                onChange={onChange}
                            >
                                <option value="전체공개">
                                    전체공개
                                </option>
                                <option value="친구만보기">
                                    친구만보기
                                </option>
                                <option value="팀만보기">
                                    팀만보기
                                </option>
                                <option value="친구+팀만보기">
                                    친구+팀만보기
                                </option>
                                <option value="나만보기">
                                    나만보기
                                </option>
                            </FormControl>
                        </ButtonGroup>
                        <ButtonGroup className="pull-right">
                            <Button type="submit">
                                올리기
                            </Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </div>
        </FormGroup>
    </form>
);
TimelineForm.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        profile: PropTypes.shape({
            profileImage: PropTypes.string,
        }).isRequired,
    }).isRequired,
    history: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onFileChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default TimelineForm;
