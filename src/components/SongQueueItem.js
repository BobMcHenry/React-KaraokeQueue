import React, {Component} from 'react'

export default class SongQueueItem extends Component {

    constructor(props){
        super(props);
        console.log('in Props ',  this.props)
    }

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
        const deleteButtonStyles = {
            backgroundColor: 'red',
            borderRadius: '50px',
            width: '75%',
            height: '75%',
            fontSize: 'large'
        }

        const singerStyles = {
            fontSize: 'large',
            flex: 3
        }

        return (
            <div style={styles}>
                <div style={singerStyles}>
                    <strong>Singer:</strong><br />
                    {this.props.song.singer} 
                </div>

                <div style={
                    {flex: 3}
                }>
                    <strong>Song:</strong><br/> {
                    this.props.song.songTitle
                } </div>

                <div style={
                    {flex: 3}
                }>
                    <strong>Artist: </strong><br/> {
                    this.props.song.artistName
                } </div>

                <div style={
                    {flex: 1}
                }>
                    <button style={deleteButtonStyles} onClick={(id) => this.props.removeHandler(this.props.song.id)} >
                        <strong>X</strong>
                    </button>
                </div>
            </div>
        )
    }
}
