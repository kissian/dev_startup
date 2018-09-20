import React from 'react';
import {
    Row,
} from 'react-bootstrap';
import './styles.scss';

const LoadingUser = () => (
    <Row className="LoadingUser">
        <div className="loadingTitle" />
        <Row>
            <div className="loadingCircle" />
            <div className="loadingLine" />
            <div className="loadingLine" />
        </Row>
        <Row>
            <div className="loadingCircle" />
            <div className="loadingLine" />
            <div className="loadingLine" />
        </Row>
        <Row>
            <div className="loadingCircle" />
            <div className="loadingLine" />
            <div className="loadingLine" />
        </Row>
        <Row>
            <div className="loadingCircle" />
            <div className="loadingLine" />
            <div className="loadingLine" />
        </Row>
        <Row>
            <div className="loadingCircle" />
            <div className="loadingLine" />
            <div className="loadingLine" />
        </Row>
    </Row>
);
export default LoadingUser;
