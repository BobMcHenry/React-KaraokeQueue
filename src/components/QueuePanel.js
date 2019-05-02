import React, {Component} from 'react'
import SongQueueList from './SongQueueList';

export default class QueuePanel extends Component {

    render() {
        const styles = {
            flex: '5',
            borderLeft: '1px #666 solid',
            paddingRight: '10px',
            textAlign: 'right',
            backgroundColor: '#EEE'
        }
        return (
            <div className='queuePanel'
                style={styles}>
                <h1>Song Queue</h1>
                <SongQueueList songQueue={this.props.songQueue} removeHandler={this.props.removeSongFromQueue}/>
            </div>
        )
    }
}
