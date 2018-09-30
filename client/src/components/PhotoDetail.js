import React from 'react';
import './PhotoDetail.css'

const PhotoDetail = ({ photo, onClose, onClickNext, onClickPrevious, hasNext, hasPrevious }) => (
    <div className="photo-detail">
        <div className="photo-detail-content">
            <div className="photo-detail-close" onClick={onClose}>&times;</div>
            <img src={photo.fullSizeUrl || photo.previewUrl} alt={photo.title} />
            <div className="photo-detail-content-info-container">
                <span className="photo-detail-content-info-title">{photo.title}</span> - <span className="photo-detail-content-info-username" onClick={() => window.open(photo.flickrRedirectUrl)}>{photo.username}</span>
                <p>{photo.description}</p>
            </div>
            <div className="photo-detail-content-next-previous-container">
                {hasPrevious ? <div className="photo-detail-content-previous" onClick={onClickPrevious}>&lt;</div> : null}
                {hasNext ? <div className="photo-detail-content-next" onClick={onClickNext}>&gt;</div> : null}
            </div>
        </div>
    </div>
);

export default PhotoDetail;