import { Autocomplete } from '../';
import { GET } from 'utils/fetch';
import { shallow } from 'enzyme';
import React from 'react';
import times from 'lodash/times';

jest.mock('utils/fetch');

describe('Autocomplete', () => {
  const defaultProps = {
    className: 'test',
    history: {
      push: jest.fn()
    }
  };
  const responseMock = {
    results: [{
      id: 1
    }, {
      id: 2
    }]
  };

  GET.mockResolvedValue(responseMock);

  it('should render Autocomplete', () => {
    const component = shallow(
      <Autocomplete {...defaultProps} />
    );

    expect(component.type()).toBe('div');
    expect(component.props().className).toBe('autocomplete test');
    expect(component.find('.autocomplete--suggestions-pop-up').length).toBe(0);
  });

  it('should render input', () => {
    const component = shallow(
      <Autocomplete {...defaultProps} />
    );
    const input = component.find('input');

    expect(input.props().className).toBe('autocomplete--input');
    expect(input.props().placeholder).toBe('Search movies...');
  });

  it('should update state on input change', done => {
    const component = shallow(
      <Autocomplete {...defaultProps} />
    );
    component.find('input').simulate('change', { target: { value: 'test' } });

    setTimeout(() => {
      expect(component.state().inputValue).toBe('test');
      expect(component.state().moviesResult).toEqual(responseMock.results);
      expect(GET).toHaveBeenCalledWith('/search/movie', {
        query: component.state().inputValue
      });

      done();
    }, 1000);
  });

  it('should clean results when empty input', done => {
    const component = shallow(
      <Autocomplete {...defaultProps} />
    );
    component.find('input').simulate('change', { target: { value: 'test' } });

    component.find('input').simulate('change', { target: { value: '' } });

    setTimeout(() => {
      expect(component.state().moviesResult).toEqual([]);

      done();
    }, 1000);
  });

  describe('when has movies results', () => {
    const moviesResult = times(10, index => ({
      id: index
    }));

    it('should not render pop up if is not focused', () => {
      const component = shallow(
        <Autocomplete {...defaultProps} />
      );
      component.setState({
        moviesResult
      });

      expect(component.find('.autocomplete--suggestions-pop-up').length).toBe(0);
    });

    it('should render pop up when is focused and hide when blurred', () => {
      const component = shallow(
        <Autocomplete {...defaultProps} />
      );
      component.setState({ moviesResult });
      component.find('input').simulate('focus');

      expect(component.find('.autocomplete--suggestions-pop-up').length).toBe(1);
      expect(component.find('.autocomplete--suggestions-list-item').length).toBe(moviesResult.length);

      component.find('input').simulate('blur');

      expect(component.find('.autocomplete--suggestions-pop-up').length).toBe(0);
    });

    it('should navigate to movie detail when click item', () => {
      const component = shallow(
        <Autocomplete {...defaultProps} />
      );
      component.setState({
        moviesResult,
        isFocused: true
      });

      component.find('.autocomplete--suggestions-list-item').first().simulate('mousedown');

      expect(defaultProps.history.push).toHaveBeenCalledWith('/movie/0');
    });
  });
});
