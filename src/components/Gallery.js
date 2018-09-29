import React from 'react';

const Gallery = ({ photos, onClickPhoto }) => (
    <div>
        {photos.map(photo => <GalleryPhoto key={photo.id} photo={photo} onClick={() => onClickPhoto(photo)}/>)}
    </div>
)

const GalleryPhoto = ({ photo, onClick }) => (
    <div onClick={onClick}>
        <h3>{photo.title} -- {photo.username}</h3>
        <p>{photo.description}</p>
    </div>
)

export default Gallery;