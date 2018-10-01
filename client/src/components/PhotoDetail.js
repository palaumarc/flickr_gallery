import React from 'react';
import './PhotoDetail.css'

const PhotoDetail = ({ photo }) => (
    <div className="photo-detail-content">
        <img src={photo.fullSizeUrl || photo.previewUrl} alt={photo.title} />
        <div className="photo-detail-content-info-container">
            <span className="photo-detail-content-info-title">{photo.title}</span> 
            - 
            <span className="photo-detail-content-info-username" onClick={() => window.open(photo.flickrRedirectUrl)}>{photo.username}</span>
            <br />
            <span className="photo-detail-content-info-description">{photo.description}</span>
        </div>
    </div>
);

export default PhotoDetail;