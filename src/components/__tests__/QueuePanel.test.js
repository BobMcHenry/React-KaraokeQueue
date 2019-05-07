import React from 'react';

import { shallow } from 'enzyme';

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
        queuePanel = shallow(<QueuePanel {...mockProps} />)
    });


    it("has a label", ()=> {
        const queuePanelHeading = queuePanel.find('#queuePanelLabel');
        
        expect(queuePanelHeading.exists()).toBe(true);
        expect(queuePanelHeading.text()==="Song Queue").toBe(true);
    })
})