import React, { Component } from 'react';
import SearchResultItem from './SearchResultItem';
export default class SearchResultsList extends Component {
  
  render() {
    const searchResults = this.props.searchResults;
    const searchResultItems = searchResults.map((song) => <SearchResultItem key={song.id} song={song} openAddSongModal={this.props.openAddSongModal}/>);
    const styles = {
        paddingLeft: '5%', paddingRight: '3%'
    }
    return (
        <div style={styles}>
            {searchResultItems}
        </div>
    )
  }
}
