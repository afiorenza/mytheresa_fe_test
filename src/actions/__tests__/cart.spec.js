import { addToCart, removeFromCart, emptyCart } from '../cart';

describe('cart', () => {
  const dispatch = jest.fn();

  beforeEach(() => dispatch.mockClear());

  describe('addToCart', () => {

    it('should dispatch ADD_TO_CART with item on the payload', () => {
      const item = {
        id: 1234,
        title: 'MOCK_MOVIE'
      };

      addToCart(item)(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: 'ADD_TO_CART',
        payload: {
          item
        }
      });
    });
  });

  describe('removeFromCart', () => {

    it('should dispatch REMOVE_FROM_CART with item id', () => {
      removeFromCart(1234)(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: 'REMOVE_FROM_CART',
        payload: {
          id: 1234
        }
      });
    });
  });

  describe('emptyCart', () => {

    it('should dispatch EMPTY_CART', () => {
      emptyCart()(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: 'EMPTY_CART'
      });
    });
  });
});
