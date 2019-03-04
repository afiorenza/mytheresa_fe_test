import { Autocomplete, MoviesList } from 'components';
import { Home } from '../';
import { shallow } from 'enzyme';
import React from 'react';

describe('Home', () => {
  const defaultProps = {
    topRatedMovies: {
      results: []
    },
    popularMovies: {
      results: []
    },
    fetchCategory: jest.fn()
  };

  afterEach(() => defaultProps.fetchCategory.mockClear());

  it('should render component', () => {
    const component = shallow(
      <Home {...defaultProps} />
    );

    expect(component.type()).toBe('div');
    expect(component.props().className).toBe('home');
  });

  it('should render Autocomplete', () => {
    const component = shallow(
      <Home {...defaultProps} />
    );

    expect(component.find(Autocomplete).length).toBe(1);
  });

  it('should render MoviesLists', () => {
    const component = shallow(
      <Home {...defaultProps} />
    );

    expect(component.find(MoviesList).length).toBe(2);
  });

  it('should fetch categories on mount', () => {
    shallow(
      <Home {...defaultProps} />
    );

    expect(defaultProps.fetchCategory).toHaveBeenCalledTimes(2);
  });

  it('should not fetch categories if have data', () => {
    shallow(
      <Home
        {...defaultProps}
        topRatedMovies={{
          results: [{ id: 1 }]
        }}
        popularMovies={{
          results: [{ id: 1 }]
        }} />
    );

    expect(defaultProps.fetchCategory).not.toHaveBeenCalled();
  });
});

