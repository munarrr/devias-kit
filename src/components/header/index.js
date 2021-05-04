import React from 'react';
import Item from './items';
import Logo from './logo';
import './style.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__row'>
          <Logo />
          <div className='header__nav'>
            <Item />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
