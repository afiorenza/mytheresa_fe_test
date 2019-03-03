import { Cart } from '../../';
import { Link } from 'react-router-dom';
import { shallow } from 'enzyme';
import Header from '../index';
import React from 'react';

describe('Header', () => {

  it('should render header', () => {
    const component = shallow(
      <Header />
    );

    expect(component.type()).toBe('div');
    expect(component.props().className).toBe('header');
  });

  it('should render link to home', () => {
    const component = shallow(
      <Header />
    );
    const homeLink = component.childAt(0);

    expect(homeLink.type()).toBe(Link);
    expect(homeLink.props().className).toBe('header--home-link');
    expect(homeLink.props().to).toBe('/');
    expect(homeLink.children().first().text()).toBe('Movie database');
  });

  it('should render Cart', () => {
    const component = shallow(
      <Header />
    );

    expect(component.childAt(1).type()).toBe(Cart);
  });
});
