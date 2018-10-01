import React from 'react';
import PropTypes from 'prop-types';

import './Lightbox.css'

const Lightbox = ({ children, onClose }) => (
    <div className="lightbox">
        <div className="lightbox-close" onClick={onClose}>&times;</div>
        <div className="lightbox-content" >
            {children}
        </div>
    </div>
);

Lightbox.propTypes = {
    onClose: PropTypes.func
}

export default Lightbox;