import React, {Component} from 'react';
//Child Component Types
import SearchPanel from './components/SearchPanel';
import QueuePanel from './components/QueuePanel';
//Mock queue data to initiate state
import songQueue from './mock-data/songQueue.json';



class App extends Component {
  constructor(props){
    super(props);

    this.addSongToQueue = this.addSongToQueue.bind(this, 'song');
    this.removeSongFromQueue = this.removeSongFromQueue.bind(this)
  }
  state = {
    songQueue: [...songQueue]
}


  // Event Handlers that manipulate Queue State. Songs to the queueare added from the searchPanel
  // and removed from the queue in the Queue panel, so the state needs elevated to the parent component.
  addSongToQueue(song){
    if (song.singer === undefined){
        song = {
            singer: "Test Value",
            songTitle: song.songTitle,
            artistName: song.artistName
        } 
    }
    this.setState( (state) => ({
        songQueue: [...this.state.songQueue, {
            id: Math.floor(Math.random()*1000000000), //mock id format - not a good pattern for UUIDs
            singer: song.singer,
            songTitle: song.songTitle,
            artistName: song.artistName
        }] 
    })
    );
}

  removeSongFromQueue(id){
    this.setState( (state) => ({
        songQueue: this.state.songQueue.filter(function (song) { return song.id !== id }) 
    })
    );
  }

  render() {
    const wrapperStyles = {
      display: 'flex',
      flexDirection: 'row wrap',
      padding: '10px 2px',
      height: '98vh',
      width: '90vw',
      margin: '0 auto',

    }


    return (
      <div className="App">
        <div className='wrapper' style={wrapperStyles} >
          <SearchPanel addSongHandler={this.addSongToQueue}/>
          <QueuePanel songQueue={this.state.songQueue} removeSongFromQueue={this.removeSongFromQueue}/>
        </div>
      </div>
    )}
  }

  export default App;
