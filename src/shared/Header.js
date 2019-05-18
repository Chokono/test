import React from 'react';

import Menu from './Menu';

import logoIcon from './svg/logo.svg';

import './Header.scss';

function Header() {
  return (
    <header className="header__container">
      <img src={logoIcon} alt="logo" className="header__logo" />
      <Menu />
    </header>
  );
}

export default Header;