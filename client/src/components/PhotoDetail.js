import React from 'react';
import './PhotoDetail.css'

const PhotoDetail = ({ photo, onClose, onClickNext, onClickPrevious, hasNext, hasPrevious }) => (
    <div className="photo-detail">
        <div className="photo-detail-close" onClick={onClose}>&times;</div>
        <div className="photo-detail-content">
            <img src={photo.fullSizeUrl || photo.previewUrl} alt={photo.title} />
            <div className="photo-detail-next-previous-container">
                {hasPrevious ? <div className="photo-detail-previous" onClick={onClickPrevious}>&lt;</div> : null}
                {hasNext ? <div className="photo-detail-next" onClick={onClickNext}>&gt;</div> : null}
            </div>
            <div>
                <span>{photo.title}</span> - <span className="photo-detail-content-username" onClick={() => window.open(photo.flickrRedirectUrl)}>{photo.username}</span>
                <p>{photo.description}</p>
            </div>
        </div>
    </div>
);

export default PhotoDetail;