import React from 'react';
import './Gallery.css';

const Gallery = ({ children }) => (
    <div className="gallery">
        {children}
    </div>
)

const GalleryPhoto = ({ photo, onClick }) => (
    <img className="gallery-photo" src={photo.previewUrl} onClick={onClick} alt='' />
)

Gallery.Photo = GalleryPhoto;

export default Gallery;