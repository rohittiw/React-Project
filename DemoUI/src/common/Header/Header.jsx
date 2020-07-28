import React from 'react';
import logo from '../../assets/images/header.png';
import './Header.scss';

const Header = () => {
    return (
        <header role="banner">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid border-bottom-header">
                    <div className="pointer">
                        <img src={logo} alt="Insure Cloud" />
                    </div>
                    <h2 className="font-center-heading">Claims Center Portal</h2>
                </div>
            </nav>
        </header>
    );
};

export default Header;