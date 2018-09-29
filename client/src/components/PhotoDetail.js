import React from 'react';

const PhotoDetail = ({ photo, onClose }) => (
    <div>
        <div onClick={onClose}>Close</div>
        <img src={photo.fullSizeUrl} alt={photo.title}/>
    </div>
);

export default PhotoDetail;