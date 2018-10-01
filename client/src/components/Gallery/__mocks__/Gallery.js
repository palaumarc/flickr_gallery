import React from "react";

const Gallery = props => <gallery-mock {...props}>{props.children}</gallery-mock>;
const GalleryPhoto = props => <gallery-photo {...props}>{props.children}</gallery-photo>;

Gallery.Photo = GalleryPhoto;

export default Gallery;
