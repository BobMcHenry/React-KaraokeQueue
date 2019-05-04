import React from 'react';
import ReactDOM from 'react-dom';

import { shallow, mount, render } from 'enzyme';

import App from './App';

describe('App component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
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