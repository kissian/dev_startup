import React from 'react';
import {
    Row, Col,
} from 'react-bootstrap';
import './styles.scss';

const SideCardLoading = () => (
    <Row className="SideCardLoding">
        <div className="loadingLine" />
        <div>
            <Col xs={6} md={4}>
                <div className="thumbnail loadingBox" />
            </Col>
            <Col xs={6} md={4}>
                <div className="thumbnail loadingBox" />
            </Col>
            <Col xs={6} md={4}>
                <div className="thumbnail loadingBox" />
            </Col>
            <Col xs={6} md={4}>
                <div className="thumbnail loadingBox" />
            </Col>
            <Col xs={6} md={4}>
                <div className="thumbnail loadingBox" />
            </Col>
            <Col xs={6} md={4}>
                <div className="thumbnail loadingBox" />
            </Col>
            <Col xs={6} md={4}>
                <div className="thumbnail loadingBox" />
            </Col>
            <Col xs={6} md={4}>
                <div className="thumbnail loadingBox" />
            </Col>
            <Col xs={6} md={4}>
                <div className="thumbnail loadingBox" />
            </Col>
        </div>
    </Row>
);

export default SideCardLoading;
