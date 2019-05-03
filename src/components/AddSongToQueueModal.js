import React, { Component } from 'react'

export default class AddSongToQueueModal extends Component {
  render() {
    return (
        <div id='modal' 
        style={{
          display: this.props.modalVisible ? 'block' : 'none',
          position:'absolute',
          top:'0',
          left:'0',
          width:'100%',
          height:'100%',
          zIndex:'99',
          backgroundColor: 'rgba(0,0,0,0.7)'
        }}>
        
            <div style={{
                backgroundColor: '#DDD', 
                width: '50%', minWidth: '500px',
                height: '30%', minHeight: '200px',
                zIndex:'100', 
                margin:'20vh auto'
            }}
            >
                <h3 style={{
                    textAlign: 'center', 
                    padding: '30px'
                }}
                >Add <em>{this.props.song.songTitle}</em> by <em>{this.props.song.artistName}</em> to queue</h3>
                <input 
                    id='singerName' 
                    style={{
                        marginLeft: '30px',  
                        width: '55%', 
                        height: '25px'
                    }}
                />
                <button style={{
                        height: '25px'
                    }} 
                    onClick={
                        //defined literal event handler, since it's just clientside validation
                        // TODO: Wrap in function
                        (singer, song) => {
                            const singerName=document.getElementById("singerName").value
                            if (singerName){ this.props.addSongToQueue(singerName, this.props.song) }
                            else { 
                                document.getElementById('singerNameLabel').style.color = "red";
                                document.getElementById('singerNameLabel').style.fontWeight = "bold";
                                document.getElementById('singerNameLabel').innerHTML = 'Enter Singer\'s Name (required)';
                            }
                        }
                    }>Submit Song to Queue</button>
                <button style={{
                        height: '25px'
                    }} 
                    onClick={this.props.closeModalWithoutQueueing}>Cancel</button>
                <br/><p id="singerNameLabel" style={{
                    marginLeft: '30px', 
                    padding: '25% 25% auto', 
                    width: '60%', 
                    height: '25px'}}>Enter Singer's Name</p>
            </div>
        
        </div>
    )
  }
}
