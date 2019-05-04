import React, { Component } from 'react'

export default class SearchResultItem extends Component {
  render() {
    const styles = {
      display: 'flex',
      textAlign: 'left',
      padding: '8px',
      backgroundColor: '#BBB',
      width: 'auto',
      marginTop: '12px',
      boxShadow: '4px 6px #DDD'
  }
  const AddToQueueButtonStyles = {
    backgroundColor: 'green',
    borderRadius: '50px',
    width: '75%',
    height: '75%',
    fontSize: 'large', 
    flex: .5
}
    return (
      <div style={styles}>
        <div style={{flex: 5}}> {this.props.song.artistName}</div>
        <div style={{flex: 5}}>{this.props.song.songTitle}</div>
        <div style={{flex: 5}}>{this.props.song.songLength}</div>
        <button style={AddToQueueButtonStyles} onClick={() => this.props.openAddSongModal(this.props.song)} >
          <strong>+</strong>
        </button>
      </div>
    )
  }
}
