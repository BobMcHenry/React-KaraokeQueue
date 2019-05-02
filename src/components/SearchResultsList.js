import React, { Component } from 'react';
import SearchResultItem from './SearchResultItem';
export default class SearchResultsList extends Component {
  
  render() {
    const searchResults = this.props.searchResults;
    const searchResultItems = searchResults.map((song) => <SearchResultItem key={song.id} song={song} addSongHandler={this.props.addSongHandler}/>);
    const styles = {
        paddingLeft: '5%', paddingRight: '3%'

    }
    return (
        <div style={styles}>
            <ul style={{padding: '0px'}}> {searchResultItems} </ul>
        </div>
    )
  }
}
