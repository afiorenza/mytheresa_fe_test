import { shallow } from 'enzyme';
import MoviesList from '../';
import React from 'react';
import times from 'lodash/times';
import { BrowserRouter } from 'react-router-dom';

describe('MoviesList', () => {
  const defaultProps = {
    category: 'test',
    isFetching: false,
    hasFetched: true,
    results: times(20, index => ({
      id: index,
      original_title: `title ${index}`
    }))
  };

  it('should render header', () => {
    const component = shallow(
      <MoviesList
        className='test'
        {...defaultProps} />
    );

    expect(component.type()).toBe('div');
    expect(component.props().className).toBe('test');
  });

  it('should render just 10 items', () => {
    const component = shallow(
      <BrowserRouter>
        <MoviesList
          {...defaultProps} />
      </BrowserRouter>
    ).render();

    expect(component.find('.movies-list--list-item').length).toBe(10);
  });

  it('should have a link to category view', () => {
    const component = shallow(
      <BrowserRouter>
        <MoviesList
          {...defaultProps} />
      </BrowserRouter>
    ).render();

    expect(component.find('a')[0].attribs.href).toEqual(`/category/${defaultProps.category}`);
  });

  it('should have a link to movie view', () => {
    const component = shallow(
      <BrowserRouter>
        <MoviesList
          {...defaultProps} />
      </BrowserRouter>
    ).render();

    expect(component.find('a')[1].attribs.href).toEqual('/movie/0');
  });
});
