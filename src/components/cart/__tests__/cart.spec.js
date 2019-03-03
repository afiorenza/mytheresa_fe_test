import { shallow } from 'enzyme';
import { Cart } from '../';
import React from 'react';

describe('Cart', () => {
  const emptyCart = jest.fn();
  const removeFromCart = jest.fn();
  const defaultProps = {
    cart: [{
      poster_path: 'mock_path_1',
      original_title: 'test 1',
      id: 1231
    }, {
      poster_path: 'mock_path_2',
      original_title: 'test 2',
      id: 2423
    }],
    emptyCart,
    removeFromCart
  };

  it('should render cart', () => {
    const component = shallow(
      <Cart {...defaultProps} />
    );

    expect(component.type()).toBe('div');
    expect(component.props().className).toBe('cart');
    expect(component.find('.cart--counter').text()).toBe('2');
  });

  it('should open cart details if click on shopping cart button', () => {
    const component = shallow(
      <Cart {...defaultProps} />
    );

    expect(component.state().isOpen).toBe(false);
    expect(component.find('.cart--details')).toEqual({});

    component.children().first().simulate('click');

    expect(component.state().isOpen).toBe(true);
    expect(component.find('.cart--details').type()).toBe('div');
  });

  it('should call removeFromCart when press on X button', () => {
    const component = shallow(
      <Cart {...defaultProps} />
    );
    component.setState({ isOpen: true });

    component.find('.cart--remove-movie-button').first().simulate('click');

    expect(removeFromCart).toHaveBeenCalledTimes(1);
    expect(removeFromCart).toHaveBeenCalledWith(1231);
  });

  it('should call emptyCart when press on remove all button', () => {
    const component = shallow(
      <Cart {...defaultProps} />
    );
    component.setState({ isOpen: true });

    component.find('.cart--remove-all-button').first().simulate('click');

    expect(emptyCart).toHaveBeenCalledTimes(1);
  });

  it('should empty warning if cart is empty', () => {
    const component = shallow(
      <Cart {...defaultProps}
        cart={[]} />
    );
    component.setState({ isOpen: true });

    expect(component.find('.cart--empty-cart-warning').text()).toEqual('You don\'t have movies yet!');
  });
});
