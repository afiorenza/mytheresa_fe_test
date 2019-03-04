import { Movie } from '../';
import { shallow } from 'enzyme';
import React from 'react';

describe('Movie', () => {
  const defaultProps = {
    fetchMovie: jest.fn(),
    match: {
      params: {
        id: 1234
      }
    },
    isFetching: false,
    hasFetched: true,
    movie: {
      original_title: 'test',
      tagline: 'test tagline',
      overview: 'test overview',
      backdrop_path: 'test_poster'
    },
    addToCart: jest.fn()
  };

  afterEach(() => {
    defaultProps.addToCart.mockClear();
    defaultProps.fetchMovie.mockClear();
  });

  it('should render component', () => {
    const component = shallow(
      <Movie {...defaultProps} />
    ).render();

    expect(component.find('.movie--title').text()).toBe(defaultProps.movie.original_title);
    expect(component.find('.movie--tag-line').text()).toBe(defaultProps.movie.tagline);
    expect(component.find('.movie--popularity').text()).toBe(defaultProps.movie.overview);
    expect(component.find('.movie--poster')[0].attribs.src).toContain(defaultProps.movie.backdrop_path);
  });

  it('should fetch movie on mount', () => {
    shallow(
      <Movie {...defaultProps} />
    );

    expect(defaultProps.fetchMovie)
      .toHaveBeenCalledWith(defaultProps.match.params.id);
  });
});

