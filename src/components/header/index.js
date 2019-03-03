import './header.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({ cart }) => {
  return (
    <div className='header'>
      <Link
        className='header--home-link'
        to='/'>
        <h1>
          Movie database
        </h1>
      </Link>

      <button className='header--cart-button'>
        <i className='header--cart-icon fas fa-shopping-cart' />

        <div className='header--cart-counter'>
          {cart.length}
        </div>
      </button>
    </div>
  );
}

Header.propTypes = {
  cart: PropTypes.array.isRequired
};

export default connect(
  ({ cart }) => cart
)(Header);
