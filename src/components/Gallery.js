import React from 'react';

const Gallery = ({ photos }) => (
    <div>
        {photos.map(photo => photo.title)}
    </div>
)

export default Gallery;