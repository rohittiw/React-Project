import React from 'react';
import footerLogo from '../../assets/images/Footer_1.png';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="Footer">
            <img src={ footerLogo } alt="Insure Cloud" />
        </footer>
    );
};

export default Footer;