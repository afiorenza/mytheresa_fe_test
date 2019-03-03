import './cart.scss';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { Poster } from 'components';
import { removeFromCart, emptyCart } from 'actions/cart';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class Cart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  renderCartDetails = () => {
    const { cart, emptyCart, removeFromCart } = this.props;

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

  render() {
    const { cart } = this.props;
    const { isOpen } = this.state;

    return (
      <div className='cart'>
        <button
          className='cart--button'
          onClick={this.toggleOpen}>
          <i className='cart--icon fas fa-shopping-cart' />

          <div className='cart--counter'>
            {cart.length}
          </div>
        </button>

        {isOpen ? this.renderCartDetails() : null}
      </div>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  emptyCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired
};

export default connect(
  ({ cart }) => cart,
  dispatch => bindActionCreators({ removeFromCart, emptyCart }, dispatch)
)(Cart);
