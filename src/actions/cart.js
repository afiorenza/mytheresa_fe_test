import {
  ADD_TO_CART,
  EMPTY_CART,
  REMOVE_FROM_CART
} from 'actions/action-types';

export const addToCart = item => dispatch => {
  dispatch({
    type: ADD_TO_CART,
    payload: {
      item
    }
  });
};

export const removeFromCart = id => dispatch => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: {
      id
    }
  });
};

export const emptyCart = () => dispatch => {
  dispatch({
    type: EMPTY_CART
  });
};
