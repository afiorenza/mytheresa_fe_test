import cart from '../cart';
import {
  ADD_TO_CART,
  EMPTY_CART,
  REMOVE_FROM_CART
} from 'actions/action-types';

describe('cart', () => {
  const state = {
    cart: [{
      id: 1
    }, {
      id: 2
    }]
  };

  it('should return state by default', () => {
    expect(cart(state, {})).toEqual(state);
  });

  it('should add items to cart', () => {
    const addToCartAction = {
      type: ADD_TO_CART,
      payload: {
        item: {
          id: 3
        }
      }
    };

    expect(cart(state, addToCartAction)).toEqual({
      cart: [...state.cart, addToCartAction.payload.item]
    });
  });

  it('should empty cart', () => {
    const emptyCartAction = {
      type: EMPTY_CART
    };

    expect(cart(state, emptyCartAction)).toEqual({
      cart: []
    });
  });

  it('should remove item from cart', () => {
    const removeFromCartAction = {
      type: REMOVE_FROM_CART,
      payload: {
        id: 1
      }
    };

    expect(cart(state, removeFromCartAction)).toEqual({
      cart: [{
        id: 2
      }]
    });
  });
});
