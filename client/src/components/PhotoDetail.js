import React from 'react';
import PropTypes from 'prop-types';

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

PhotoDetail.propTypes = {
    photo: PropTypes.shape({
        previewUrl: PropTypes.string,
        fullSizeUrl: PropTypes.string,
        title: PropTypes.string,
        flickrRedirectUrl: PropTypes.string,
        username: PropTypes.string,
        description: PropTypes.string
    }).isRequired
}

export default PhotoDetail;