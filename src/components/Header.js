import React from 'react';
import logo from '../images/header_logo.svg';

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Логотип шапка" className="header__logo"></img>
        </header>
    );
}

export default Header;