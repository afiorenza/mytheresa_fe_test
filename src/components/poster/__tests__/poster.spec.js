import { shallow } from 'enzyme';
import Poster from '../';
import React from 'react';

describe('Poster', () => {

  it('should render poster', () => {
    const component = shallow(
      <Poster
        path='img_path'
        className='test' />
    );

    expect(component.type()).toBe('img');
    expect(component.props().className).toBe('test');
    expect(component.props().src).toBe('http://image.tmdb.org/t/p/original/img_path');
  });
});
