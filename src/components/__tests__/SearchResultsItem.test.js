import React from 'react';

import { shallow } from 'enzyme';
import SearchResultItem from '../SearchResultItem';

let searchResultItem = {};
let mockProps = {};


beforeAll(() => {
    mockProps = {
        song: {
            artistName: "Chili's staff",
            id: "8675309",
            songTitle: "Happy Birthday(Chili's version)",
            songLength: "0:30"
        },
        openAddSongModal: jest.fn()
    }

    searchResultItem = shallow(<SearchResultItem {...mockProps} />);
});

it('Has a Song Title', () => {
    expect(searchResultItem.children().containsMatchingElement(mockProps.song.songTitle)).toBe(true);
});

it('Has an artist name', () => {
    expect(searchResultItem.children().containsMatchingElement(mockProps.song.artistName)).toBe(true);
});

it('Has a Song Length', () => {
    expect(searchResultItem.children().containsMatchingElement(mockProps.song.songLength)).toBe(true);
});

it('Has an add-to-queue button', () => {
    let addToQueueButton = searchResultItem.find('#addToQueueButton-'+mockProps.song.id)
    expect(addToQueueButton.exists()).toBe(true);
});
