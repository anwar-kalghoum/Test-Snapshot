import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
describe('MyComponent', () => {
  it('Test Snapshot using  enzyme', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});