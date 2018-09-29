import React from 'react';

export default Gallery = ({ photos }) => (
    <div>
        {photos.map(photo => photo.title)}
    </div>
)