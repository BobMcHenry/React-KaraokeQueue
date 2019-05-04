import React, { Component } from 'react'

export default class AddSongToQueueModal extends Component {



    render() {
        const validateSingerNameHandler = (singer, song) => {
            const singerName=document.getElementById("singerName").value
            if (singerName){ this.props.addSongToQueue(singerName, this.props.song) }
            else { 
                document.getElementById('singerNameLabel').style.color = "red";
                document.getElementById('singerNameLabel').style.fontWeight = "bold";
                document.getElementById('singerNameLabel').innerHTML = 'Enter Singer\'s Name (required)';
            }
        }

        const appCoverUpStyle = {
            display: this.props.modalVisible ? 'block' : 'none',
            position:'absolute',
            top:'0',
            left:'0',
            width:'100%',
            height:'100%',
            zIndex:'99',
            backgroundColor: 'rgba(0,0,0,0.7)'
        }

        const modalPanelStyle = {
            backgroundColor: '#DDD', 
            width: '50%', minWidth: '500px',
            height: '30%', minHeight: '200px',
            zIndex:'100', 
            margin:'20vh auto'
        }

        const modalHeaderStyle = {
            textAlign: 'center', 
            padding: '30px'
        }

        const singerNameInputStyle = {
            marginLeft: '30px',  
            width: '55%', 
            height: '25px'
        }

        const singerNameLabelStyle = {
            marginLeft: '30px', 
            padding: '25% 25% auto', 
            width: '60%', 
            height: '25px'}

        return (
            <div id='appCoverUp' style={appCoverUpStyle}>
            
                <div id='modalPanel' style={modalPanelStyle}>
                    <h3 id='modalHeader' style={modalHeaderStyle}>
                        Add <em>{this.props.song.songTitle}</em> by <em>{this.props.song.artistName}</em> to queue
                    </h3>
                    <input id='singerNameInput' style={singerNameInputStyle} />
                    <button  id='modalSubmitButton' style={{height: '25px'}} onClick={validateSingerNameHandler}>
                        Submit Song to Queue
                    </button>
                    <button  id='modalCancelButton' style={{height: '25px'}} onClick={this.props.closeModalWithoutQueueing}>
                        Cancel
                    </button>
                    <br/>
                    <p id="singerNameLabel" style={singerNameLabelStyle}>
                        Enter Singer's Name
                    </p>
                </div>
            </div>
        )
    }
}
