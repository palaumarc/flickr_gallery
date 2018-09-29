import React from 'react';
import './Gallery.css';

const Gallery = ({ children }) => (
    <div className="gallery">
        {children}
    </div>
)

const GalleryPhoto = ({ photo, onClick }) => (
    <div onClick={onClick} className="gallery-photo-container">
        <img className="gallery-photo" src={photo.previewUrl} alt='' />
        <div className="overlay">
            <div className="text">{photo.title}</div>
        </div>
    </div>
)

Gallery.Photo = GalleryPhoto;

export default Gallery;