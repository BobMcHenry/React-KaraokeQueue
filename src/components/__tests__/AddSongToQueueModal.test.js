import React from 'react';
import {  shallow } from 'enzyme';

import AddSongToQueueModal from '../AddSongToQueueModal';

describe('[UNIT] Add Song to Queue Modal', () => {
  //Setup Methods
  let addSongToQueueModal = {};
  let mockProps = {};

  beforeAll(() => {
    mockProps = {
      modalVisible: true,
      modalToggle: jest.fn(),
      song: { 
        "songTitle": "Something to believe in",
        "artistName": "Poison"
      },
      singer: {
        "id": 8675309,
        "singer": "Phil",
        "songTitle": "Something to believe in",
        "artistName": "Poison"
      },
      addSongToQueue: jest.fn(),
      closeModalWithoutQueueing: jest.fn()
    }
    addSongToQueueModal = shallow(<AddSongToQueueModal {...mockProps}/>)
  });

  it('has singer name input field visible?', ()=> {
    expect(addSongToQueueModal.exists('#singerNameInput')).toBe(true);
  })

  it('has Submit Song to Queue button visible?', ()=> {
    expect(
      addSongToQueueModal.find('#modalSubmitButton').exists()).toBe(true)
  })

  it('has valid has cancel button visible?', ()=> {
    expect(
      addSongToQueueModal.find('#modalCancelButton').exists()).toBe(true)
  })
});