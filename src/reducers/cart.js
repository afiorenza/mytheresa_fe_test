import {
  ADD_TO_CART,
  EMPTY_CART,
  REMOVE_FROM_CART
} from 'actions/action-types';

const initialState = {
  cart: []
};

export default (state = initialState, { type, payload }) => {
  let itemToRemoveIndex;

  switch (type) {
  case ADD_TO_CART:
    return {
      cart: [...state.cart, payload.item]
    };

  case EMPTY_CART:
    return {
      cart: []
    };

  case REMOVE_FROM_CART:
    itemToRemoveIndex = state.cart.findIndex(({ id }) => id === payload.id);

    return {
      cart: [
        ...state.cart.slice(0, itemToRemoveIndex),
        ...state.cart.slice(itemToRemoveIndex + 1)
      ]
    };

  default:
    return state;
  }
};
