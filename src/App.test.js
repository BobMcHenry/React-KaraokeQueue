import React from 'react';

import { mount } from 'enzyme';

import App from './App';

describe('App component', () => {
  it('renders without crashing', () => {
    mount(<App />);
  });

  it('contains a search panel component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.children().exists( 'SearchPanel' )).toBe(true);
  });

  it('contains a queue panel component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.children().exists( 'QueuePanel' )).toBe(true);
  });
});