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