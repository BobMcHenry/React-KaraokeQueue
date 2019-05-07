import React from 'react';
import ReactDOM from 'react-dom';

import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer'; //needed for Jest snapshots

import QueuePanel from '../QueuePanel';

describe("[UNIT] Queue Panel", ()=>{
    // From APP.js <QueuePanel songQueue={this.state.songQueue} removeSongFromQueue={this.removeSongFromQueue}/>
    let queuePanel = {};
    let mockProps = {};

    beforeAll(() => {
        mockProps = {
            removeSongFromQueue: jest.fn(),
            songQueue: [{id: "0001", singer: "Test Singer", songTitle: "Song name", artistName:"Artist Name"}]
        };
        queuePanel = mount(<QueuePanel {...mockProps} />)
    });


    it("has a label", ()=> {
        const queuePanelHeading = queuePanel.find('#queuePanelLabel');
        
        expect(queuePanelHeading.exists()).toBe(true);
        expect(queuePanelHeading.text()==="Song Queue").toBe(true);
    })
})