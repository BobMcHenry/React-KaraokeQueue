import React from 'react';

import { shallow } from 'enzyme';
import SearchPanel from '../SearchPanel';

let searchPanel={};
let mockProps={};

beforeAll(() => {
    mockProps: {
        
    };
    searchPanel = shallow(<SearchPanel {...mockProps} />)
})

it('Has a label', () => {
    const searchPanelHeading = searchPanel.find('#searchPanelLabel');
    expect(searchPanelHeading.exists()).toBe(true);
    expect(searchPanelHeading.text()==="Song Search").toBe(true);
});

it('Has a text input for search', () => {
    const searchQueryInput = searchPanel.find('#searchQueryInput');
    expect(searchQueryInput.exists()).toBe(true);
    expect(searchQueryInput.matchesElement(<input type='text' />)).toBe(true);
});

it('has a submit button for performing searches', () => {
    //<input type='submit'   
    const searchButton = searchPanel.find('#searchButton');
    expect(searchButton.exists()).toBe(true);
    expect(searchButton.matchesElement(<input type='submit' />)).toBe(true);
}); 

it('has text input and submit button in form element', () => {
    const searchForm = searchPanel.find('.songSearch');
    expect(searchForm.exists()).toBe(true);
    expect(searchForm.type()).toBe('form');
    expect(searchForm.children('#searchButton').exists()).toBe(true);
    expect(searchForm.children('#searchQueryInput').exists()).toBe(true);
});