import './header.scss';

import { Cart } from '../';
import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
  return (
    <div className='header'>
      <Link
        className='header--home-link'
        to='/'>
        <h1>
          Movie database
        </h1>
      </Link>

      <Cart />
    </div>
  );
};

export default Header;
