import React from 'react';
import './Lightbox.css'

const Lightbox = ({ children, onClose }) => (
    <div className="lightbox">
        <div className="lightbox-close" onClick={onClose}>&times;</div>
        <div className="lightbox-content" >
            {children}
        </div>
    </div>
);

export default Lightbox;