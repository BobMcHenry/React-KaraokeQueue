import React, {Component} from 'react';
import SearchPanel from './components/SearchPanel';
import QueuePanel from './components/QueuePanel';
import songLibrary from './mock-data/songLibrary.json';


class App extends Component {

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
          <SearchPanel />
          <QueuePanel />
        </div>
      </div>
    )}
  }

  export default App;
