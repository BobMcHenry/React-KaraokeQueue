import React, {Component} from 'react'
import SongQueueItem from './SongQueueItem';

export default class SongQueueList extends Component {

    render() {
        const queuedSongList = this.props.songQueue
        const queuedSongListItems = queuedSongList.map((song) => 
            <SongQueueItem 
                key={song.id} 
                song={song} 
                removeHandler={this.props.removeHandler}/>
        )

        const styles = {
            paddingLeft: '5%', paddingRight: '3%'

        }
        return (
            <div style={styles}>
                <ul style={{padding: '0px'}}> {queuedSongListItems} </ul>
            </div>
        )
    }
}
