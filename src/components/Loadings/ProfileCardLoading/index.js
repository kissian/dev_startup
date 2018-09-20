import React from 'react';
import './styles.scss';

const ProfileCardLoading = () => (
    <div className="flex-column profileCard">
        <div style={{ marginRight: 12 }} className="loadingLine" />
        <div className="circleBox">
            <div className="loadingCircle" />
        </div>
    </div>
);

export default ProfileCardLoading;
