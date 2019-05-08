import React from 'react';

import { shallow } from 'enzyme';
import SearchResultsList from '../SearchResultsList';
import SearchResultItem from '../SearchResultItem';

let searchResultsList = {};
let mockProps = {};


beforeAll(() => {
    mockProps = {
        searchResults: [
            {
                artistName: "Chili's staff",
                id: "8675309",
                songTitle: "Happy Birthday(Chili's version)",
                songLength: "0:30"
            }
        ]
    }

    searchResultsList = shallow(<SearchResultsList {...mockProps} />);
});

it ('contains one SearchListItem Component', () => {
    expect(searchResultsList.children()).toHaveLength(1);
    expect(searchResultsList.containsMatchingElement(<SearchResultItem />)).toBe(true);
});

