import React, {Component} from 'react'
import SongQueueList from './SongQueueList';
import songQueue from '../mock-data/songQueue.json';

export default class QueuePanel extends Component {
    constructor(props){
        super(props);
        this.addSongToQueue = this.addSongToQueue.bind(this)
        this.removeSongFromQueue = this.removeSongFromQueue.bind(this, 'id')
    }

    state = {
        songQueue,
        queueLength: songQueue.length
    }

    addSongToQueue(song){
        if (song.singer === undefined){
            song = {
                singer: "Test Value",
                songTitle: "Test Value",
                artistName: "song.artistName"
            } 
        }
        this.setState( (state) => ({
            queueLength: this.state.queueLength + 1,
            songQueue: [...this.state.songQueue, {
                id: this.state.queueLength,
                singer: song.singer,
                songTitle: song.songTitle,
                artistName: song.artistName
            }] 
        })
        );
    }

    removeSongFromQueue(e,id){
        this.setState( (state) => ({
            queueLength: this.state.queueLength - 1,
            songQueue: this.state.songQueue.filter(function (song) { return song.id !== id }) 
        })
        );
    }


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
                <SongQueueList songQueue={this.state.songQueue} removeHandler={this.removeSongFromQueue}/>
            </div>
        )
    }
}
