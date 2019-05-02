import React, {Component} from 'react'
import songLibrary from '../mock-data/songLibrary.json';
import SearchResultsList from './SearchResultsList.js';

class SearchPanel extends Component {
    constructor(props){
        super(props);

        this.state = {
            searchResults: []
        }
    }

    searchSongs(e){
        e.preventDefault();
        this.setState({
            searchResults: [...songLibrary]
        })
    }



    render() {
        const searchPanelStyles = {
            flex: '5',
            borderRight: '1px #666 solid',
            paddingRight: '10px',
            textAlign: 'right',
            backgroundColor: '#EEE'
        }
        const formStyles = {
            paddingBottom: '10px',
            textAlign: 'center',
            display: 'flex',
            padding: '10px'
        }
        const textBarStyles = {
            flex: 9,
            paddingRight: '2px',
            padding: '10px',
            fontSize: '1.15em'
        }
        const submitButtonStyles = {
            flex: 2,
            backgroundColor: '#00DD11',
            borderRadius: '10px',
            fontWeight: '700',
            fontSize: '1.15em'
        }
        return (
            <div className='searchPanel'
                style={searchPanelStyles}>
                <h1>Song Search</h1>
                <form className='songSearch'
                    style={formStyles}>
                    <input type='text'
                        style={textBarStyles}/>
                    <input type='submit' value='Search' style={submitButtonStyles} onClick={(e) => this.searchSongs(e)} />
                </form>
                <SearchResultsList searchResults={this.state.searchResults} openAddSongModal={this.props.openAddSongModal}/>
            </div>
        )
    }
}

export default SearchPanel;
