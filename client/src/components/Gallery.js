import React from 'react';

const Gallery = ({ children }) => (
    <div>
        {children}
    </div>
)

const GalleryPhoto = ({ photo, onClick }) => (
    <div onClick={onClick}>
        <h3>{photo.title} -- {photo.username}</h3>
        <p>{photo.description}</p>
    </div>
)

Gallery.Photo = GalleryPhoto;

export default Gallery;