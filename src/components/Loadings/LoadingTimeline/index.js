import React from 'react';
import './styles.scss';

const LoadingTimeline = () => (
    <div className="flex-column timelineLoding">
        <div className="flex-row-center">
            <div style={{ marginRight: 12 }} className="loadingCircle" />
            <div style={{ flex: '1 1 auto' }}>
                <div className="flex-row-center">
                    <div className="loadingLine" style={{ flex: '1 1 0' }} />
                </div>
                <div className="flex-row-center">
                    <div style={{ flex: '1 1 0' }}>
                        <div className="loadingLine" style={{ flex: '1 1 0' }} />
                    </div>
                </div>
            </div>
        </div>
        <div style={{ marginTop: 6, flex: '1 1 0' }}>
            <div className="loadingLine" style={{ flex: '1 1 0' }} />
            <div className="loadingLine" style={{ flex: '1 1 0' }} />
            <div className="loadingLine" style={{ flex: '1 1 0' }} />
            <div className="loadingBox" style={{ flex: '1 1 0' }} />
        </div>
    </div>
);

export default LoadingTimeline;
