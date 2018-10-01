import React from 'react';
import PropTypes from 'prop-types';

import './Lightbox.css'

const Lightbox = ({ children, onClickCloseButton }) => (
    <div className="lightbox">
        <div className="lightbox-close" onClick={onClickCloseButton}>&times;</div>
        <div className="lightbox-content" >
            {children}
        </div>
    </div>
);

Lightbox.propTypes = {
    onClose: PropTypes.func
}

export default Lightbox;