import React from 'react';
import './PhotoDetail.css'

const PhotoDetail = ({ photo, onClose, previousControl, nextControl }) => (
    <div className="photo-detail">
        <div className="photo-detail-content">
            <div className="photo-detail-close" onClick={onClose}>&times;</div>
            <img src={photo.fullSizeUrl || photo.previewUrl} alt={photo.title} />
            <div className="photo-detail-content-info-container">
                <span className="photo-detail-content-info-title">{photo.title}</span> - <span className="photo-detail-content-info-username" onClick={() => window.open(photo.flickrRedirectUrl)}>{photo.username}</span>
                <p>{photo.description}</p>
            </div>
            <div className="photo-detail-content-next-previous-container">
                {previousControl}
                {nextControl}
            </div>
        </div>
    </div>
);

PhotoDetail.PreviousPhotoArrow = ({onClick}) => (
    <div className="photo-detail-content-previous" onClick={onClick}>&lt;</div>
);

PhotoDetail.NextPhotoArrow = ({onClick}) => (
    <div className="photo-detail-content-next" onClick={onClick}>&gt;</div>
);

export default PhotoDetail;