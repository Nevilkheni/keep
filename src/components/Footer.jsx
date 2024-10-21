import React from 'react';
import './All.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='footer'>
            <p>copyright ©️ {year}</p>
        </div>
    );
};

export default Footer;
