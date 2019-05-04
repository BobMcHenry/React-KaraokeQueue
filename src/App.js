import React, {Component} from 'react';
//Child Component Types
import SearchPanel from './components/SearchPanel';
import QueuePanel from './components/QueuePanel';
//Mock queue data to initiate state
import songQueue from './mock-data/songQueue.json';
import AddSongToQueueModal from './components/AddSongToQueueModal';



class App extends Component {
  constructor(props){
    super(props);

    this.addSongToQueue = this.addSongToQueue.bind(this, 'song');
    this.removeSongFromQueue = this.removeSongFromQueue.bind(this)
    this.openAddSongModal = this.openAddSongModal.bind(this)
    this.closeModalWithoutQueueing = this.closeModalWithoutQueueing.bind(this)
  }
  state = {
    songQueue: [...songQueue],
    modalVisible: false
}


  // Event Handlers that manipulate Queue State. Songs to the queue are added from the searchPanel
  // and removed from the queue in the Queue panel, so the state needs elevated to the parent component.
  addSongToQueue(singer, song){
    this.setState( (state) => ({
        songQueue: [...this.state.songQueue, {
            id: Math.floor(Math.random()*1000000000), //mock id format - not a good pattern for UIDs
            singer: singer,
            songTitle: song.songTitle,
            artistName: song.artistName
        }] 
    })
    );
    this.closeModalWithoutQueueing()
}

  removeSongFromQueue(id){
    this.setState( (state) => ({
        songQueue: this.state.songQueue.filter(function (song) { return song.id !== id }) 
    })
    );
  }

  openAddSongModal(song){
    this.setState({
      modalVisible: true,
      songToQueue: song
    })
  }

  closeModalWithoutQueueing(){
    this.setState({
      modalVisible: false,
      songToQueue: {}
    })
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
    const modal =  
      <AddSongToQueueModal 
        modalVisible={this.state.modalVisible} 
        modalToggle={this.openAddSongModal} 
        song={this.state.songToQueue}
        singer={this.state.singerName}
        addSongToQueue={this.addSongToQueue}
        closeModalWithoutQueueing={this.closeModalWithoutQueueing}
      />

    return (
      <div className="App">
       {this.state.modalVisible ? modal : null}
        <div className='wrapper' style={wrapperStyles} >
          <SearchPanel addSongHandler={this.addSongToQueue} openAddSongModal={this.openAddSongModal}/>
          <QueuePanel songQueue={this.state.songQueue} removeSongFromQueue={this.removeSongFromQueue}/>
        </div>
      </div>
    )}
  }

  export default App;
