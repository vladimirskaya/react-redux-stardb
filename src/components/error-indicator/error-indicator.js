import React from 'react';

import './error-indicator.css';
import icon from './deathstar.png';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <div className="img-container">
                <img className="error-img" src={icon} alt="error img"/> 
            </div>
            <span className="boom">BOOM!</span>
            <span>
                something has gone terribly wrong
            </span>
            <span>
                (but we already sent droids to fix it)
            </span>
        </div>
    );
}

export default ErrorIndicator;