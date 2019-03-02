import Home from '../';
import React from 'react';
import {shallow} from 'enzyme';

describe('Home', () => {
  it('should mount', () => {
    const home = shallow(<Home />);
  });
});
