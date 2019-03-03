import './cart.scss';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { Poster } from 'components';
import { removeFromCart, emptyCart } from 'actions/cart';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Cart = ({ cart, emptyCart, removeFromCart }) => {
  const [isOpen, updateIsOpen] = useState(false);

  const renderCartDetails = () => {
    return (
      <div className='cart--details'>
        {
          isEmpty(cart)
            ? <p className='cart--empty-cart-warning'>
              {'You don\'t have movies yet!'}
            </p>
            : <div>
              <ul className='cart--movies-list'>
                {
                  cart.map((movie, index) =>
                    <li
                      className='cart--movie-item'
                      key={index}>
                      <Poster
                        className='cart--movie-poster'
                        path={movie.poster_path} />

                      {movie.original_title}

                      <button
                        className='cart--remove-movie-button'
                        onClick={removeFromCart.bind(this, movie.id)}>
                        <i className='fas fa-times' />
                      </button>
                    </li>
                  )
                }
              </ul>

              <button
                className='cart--remove-all-button'
                onClick={emptyCart}>
                <i className='cart--remove-all-icon fas fa-trash-alt' />

                Remove all
              </button>
            </div>
        }
      </div>
    );
  };

  return (
    <div className='cart'>
      <button
        className='cart--button'
        onClick={() => updateIsOpen(!isOpen)}>
        <i className='cart--icon fas fa-shopping-cart' />

        <div className='cart--counter'>
          {cart.length}
        </div>
      </button>

      {isOpen ? renderCartDetails() : null}
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  emptyCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  history: PropTypes.object
};

export default connect(
  ({ cart }) => cart,
  dispatch => bindActionCreators({ removeFromCart, emptyCart }, dispatch)
)(Cart);
