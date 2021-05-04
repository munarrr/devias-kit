import React from 'react';
import { navItems } from './const';

function Item() {
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        {navItems.map((item) => (
          <li className='nav__item' key={item.id}>
            <a className='nav__link' href={item}>
              <img src={item} alt='icon' />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Item;
