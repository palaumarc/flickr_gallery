import React from 'react';

export default PhotoDetail = ({ photo, onClose }) => (
    <div>
        <div onClick={onClose}>Close</div>
        <img src={photo.fullSizeUrl} alt={photo.title}/>
    </div>
);