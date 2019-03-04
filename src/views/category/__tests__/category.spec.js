import { shallow } from 'enzyme';
import { Category } from '../';
import React from 'react';

describe('Category', () => {
  const defaultProps = {
    fetchCategory: jest.fn(),
    page: 1,
    results: [{
      id: 1,
      original_title: 'test 1'
    }, {
      id: 2,
      original_title: 'test 2'
    }],
    total_pages: 10,
    isFetching: false,
    match: {
      params: {
        category: 'TEST'
      }
    }
  };

  it('should render component', () => {
    const component = shallow(
      <Category {...defaultProps} />
    );

    expect(component.type()).toBe('div');
    expect(component.props().className).toBe('category');
  });

  it('should render items', () => {
    const component = shallow(
      <Category {...defaultProps} />
    );

    expect(component.find('.category--list-item').length).toEqual(2);
  });
});

