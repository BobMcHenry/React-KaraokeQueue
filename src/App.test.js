import React from 'react';

import { shallow } from 'enzyme';

import App from './App';

describe('App component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('contains a search panel component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.children().exists( 'SearchPanel' )).toBe(true);
  });

  it('contains a queue panel component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.children().exists( 'QueuePanel' )).toBe(true);
  });
});