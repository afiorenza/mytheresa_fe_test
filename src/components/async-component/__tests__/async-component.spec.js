import { shallow } from 'enzyme';
import AsyncComponent from '../index';
import React from 'react';

describe('AsyncComponent', () => {
  const renderView = jest.fn();

  afterAll(() => renderView.mockClear());

  it('should not render anything by default', ()=> {
    const component = shallow(
      <AsyncComponent
        renderView={renderView} />
    );

    expect(component.type()).toBeNull();
  });

  describe('when loading', () => {

    it('should return loading view', () => {
      const component = shallow(
        <AsyncComponent
          isFetching={true}
          renderView={renderView} />
      );

      expect(component.text()).toEqual('Loading...');
      expect(renderView).not.toHaveBeenCalled();
    });
  });

  describe('when error', () => {

    it('should return error view', () => {
      const component = shallow(
        <AsyncComponent
          error={new Error()}
          renderView={renderView} />
      );

      expect(component.text()).toEqual('Error fetching data.');
      expect(renderView).not.toHaveBeenCalled();
    });
  });

  describe('when data has been loaded', () => {

    it('should render view', () => {
      shallow(
        <AsyncComponent
          isFetching={false}
          hasFetched={true}
          renderView={renderView} />
      );

      expect(renderView).toHaveBeenCalled();
    });
  });
});
