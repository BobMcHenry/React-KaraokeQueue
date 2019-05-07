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
            
        };
        queuePanel = mount(<QueuePanel {...mockProps} />)
    });


    it("has a label", ()=> {
        expect(true).toBe(false);
    })
})