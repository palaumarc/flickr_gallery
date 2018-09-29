import React from 'react';
import './PhotoDetail.css'

const PhotoDetail = ({ photo, onClose }) => (
    <div className="photo-detail">
        <div className="photo-detail-close" onClick={onClose}>&times;</div>
        <div className="photo-detail-content">
            <img src={photo.fullSizeUrl || photo.previewUrl} alt={photo.title}/>
        </div>
    </div>
);

export default PhotoDetail;