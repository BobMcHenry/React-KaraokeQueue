import React, { Component } from 'react'

export default class SearchResultsList extends Component {
  state = {songLibrary: songLibrary}
  render() {
    const queuedSongList = this.props.songQueue
    const queuedSongListItems = queuedSongList.map((song) => <SongQueueItem song={song}/>)
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
