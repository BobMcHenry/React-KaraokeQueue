(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e){e.exports=[{id:0,songTitle:"Song Title",artistName:"Artist Name",songLength:"3:21"},{id:1,songTitle:"Song Title II",artistName:"Artist Name II",songLength:"3:21"}]},11:function(e){e.exports=[{id:0,singer:"Kenny",songTitle:"Every Rose Has It's Thorn",artistName:"Poison"},{id:1,singer:"Bill",songTitle:"Taking Care of Business",artistName:"BTO"}]},12:function(e,t,n){e.exports=n(19)},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(9),r=n.n(i),l=(n(18),n(7)),s=n(1),u=n(2),d=n(5),c=n(3),g=n(4),p=n(6),h=n(10),m=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:{display:"flex",textAlign:"left",padding:"8px",backgroundColor:"#BBB",width:"auto",marginTop:"12px",boxShadow:"4px 6px #DDD"}},o.a.createElement("div",{style:{flex:5}}," ",this.props.song.artistName),o.a.createElement("div",{style:{flex:5}},this.props.song.songTitle),o.a.createElement("div",{style:{flex:5}},this.props.song.songLength),o.a.createElement("button",{style:{backgroundColor:"green",borderRadius:"50px",width:"75%",height:"75%",fontSize:"large",flex:.5},onClick:function(){return e.props.openAddSongModal(e.props.song)}},o.a.createElement("strong",null,"+")))}}]),t}(a.Component),b=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.searchResults.map(function(t){return o.a.createElement(m,{key:t.id,song:t,openAddSongModal:e.props.openAddSongModal})});return o.a.createElement("div",{style:{paddingLeft:"5%",paddingRight:"3%"}},o.a.createElement("ul",{style:{padding:"0px"}}," ",t," "))}}]),t}(a.Component),f=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(c.a)(t).call(this,e))).state={searchResults:[]},n}return Object(g.a)(t,e),Object(u.a)(t,[{key:"searchSongs",value:function(e){e.preventDefault(),this.setState({searchResults:Object(l.a)(h)})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"searchPanel",style:{flex:"5",borderRight:"1px #666 solid",paddingRight:"10px",textAlign:"right",backgroundColor:"#EEE"}},o.a.createElement("h1",{id:"searchPanelLabel"},"Song Search"),o.a.createElement("form",{className:"songSearch",style:{paddingBottom:"10px",textAlign:"center",display:"flex",padding:"10px"}},o.a.createElement("input",{type:"text",id:"searchQueryInput",style:{flex:9,paddingRight:"2px",padding:"10px",fontSize:"1.15em"}}),o.a.createElement("input",{type:"submit",id:"searchButton",value:"Search",style:{flex:2,backgroundColor:"#00DD11",borderRadius:"10px",fontWeight:"700",fontSize:"1.15em"},onClick:function(t){return e.searchSongs(t)}})),o.a.createElement(b,{searchResults:this.state.searchResults,openAddSongModal:this.props.openAddSongModal}))}}]),t}(a.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:{display:"flex",textAlign:"left",padding:"8px",backgroundColor:"#BBB",width:"auto",marginTop:"12px",boxShadow:"4px 6px #DDD"}},o.a.createElement("div",{style:{fontSize:"large",flex:3}},o.a.createElement("strong",null,"Singer:"),o.a.createElement("br",null),this.props.song.singer),o.a.createElement("div",{style:{flex:3}},o.a.createElement("strong",null,"Song:"),o.a.createElement("br",null)," ",this.props.song.songTitle," "),o.a.createElement("div",{style:{flex:3}},o.a.createElement("strong",null,"Artist: "),o.a.createElement("br",null)," ",this.props.song.artistName," "),o.a.createElement("div",{style:{flex:1}},o.a.createElement("button",{style:{backgroundColor:"red",borderRadius:"50px",width:"75%",height:"75%",fontSize:"large"},onClick:function(t){return e.props.removeHandler(e.props.song.id)}},o.a.createElement("strong",null,"X"))))}}]),t}(a.Component),v=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.songQueue.map(function(t){return o.a.createElement(y,{key:t.id,song:t,removeHandler:e.props.removeHandler})});return o.a.createElement("div",{style:{paddingLeft:"5%",paddingRight:"3%"}},o.a.createElement("ul",{style:{padding:"0px"}}," ",t," "))}}]),t}(a.Component),E=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"queuePanel",style:{flex:"5",borderLeft:"1px #666 solid",paddingRight:"10px",textAlign:"right",backgroundColor:"#EEE"}},o.a.createElement("h1",{id:"queuePanelLabel"},"Song Queue"),o.a.createElement(v,{songQueue:this.props.songQueue,removeHandler:this.props.removeSongFromQueue}))}}]),t}(a.Component),x=n(11),S=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t={display:this.props.modalVisible?"block":"none",position:"absolute",top:"0",left:"0",width:"100%",height:"100%",zIndex:"99",backgroundColor:"rgba(0,0,0,0.7)"};return o.a.createElement("div",{id:"appCoverUp",style:t},o.a.createElement("div",{id:"modalPanel",style:{backgroundColor:"#DDD",width:"50%",minWidth:"500px",height:"30%",minHeight:"200px",zIndex:"100",margin:"20vh auto"}},o.a.createElement("h3",{id:"modalHeader",style:{textAlign:"center",padding:"30px"}},"Add ",o.a.createElement("em",null,this.props.song.songTitle)," by ",o.a.createElement("em",null,this.props.song.artistName)," to queue"),o.a.createElement("input",{id:"singerNameInput",style:{marginLeft:"30px",width:"55%",height:"25px"}}),o.a.createElement("button",{id:"modalSubmitButton",style:{height:"25px"},onClick:function(){var t=document.getElementById("singerNameInput").value;t?e.props.addSongToQueue(t):(document.getElementById("singerNameLabel").style.color="red",document.getElementById("singerNameLabel").style.fontWeight="bold",document.getElementById("singerNameLabel").innerHTML="Enter Singer's Name (required)")}},"Submit Song to Queue"),o.a.createElement("button",{id:"modalCancelButton",style:{height:"25px"},onClick:this.props.closeModalWithoutQueueing},"Cancel"),o.a.createElement("br",null),o.a.createElement("p",{id:"singerNameLabel",style:{marginLeft:"30px",padding:"25% 25% auto",width:"60%",height:"25px"}},"Enter Singer's Name")))}}]),t}(a.Component),O=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(c.a)(t).call(this,e))).state={songQueue:Object(l.a)(x),modalVisible:!1,songToQueue:null},n.addSongToQueue=n.addSongToQueue.bind(Object(p.a)(Object(p.a)(n))),n.removeSongFromQueue=n.removeSongFromQueue.bind(Object(p.a)(Object(p.a)(n))),n.openAddSongModal=n.openAddSongModal.bind(Object(p.a)(Object(p.a)(n))),n.closeModalWithoutQueueing=n.closeModalWithoutQueueing.bind(Object(p.a)(Object(p.a)(n))),n}return Object(g.a)(t,e),Object(u.a)(t,[{key:"addSongToQueue",value:function(e){var t=this;this.setState(function(n){return{songQueue:[].concat(Object(l.a)(t.state.songQueue),[{id:Math.floor(1e9*Math.random()),singer:e,songTitle:t.state.songToQueue.songTitle,artistName:t.state.songToQueue.artistName}])}}),this.closeModalWithoutQueueing()}},{key:"removeSongFromQueue",value:function(e){var t=this;this.setState(function(n){return{songQueue:t.state.songQueue.filter(function(t){return t.id!==e})}})}},{key:"openAddSongModal",value:function(e){this.setState({modalVisible:!0,songToQueue:e})}},{key:"closeModalWithoutQueueing",value:function(){this.setState({modalVisible:!1,songToQueue:{}})}},{key:"render",value:function(){var e=o.a.createElement(S,{modalVisible:this.state.modalVisible,modalToggle:this.openAddSongModal,song:this.state.songToQueue,singer:this.state.singerName,addSongToQueue:this.addSongToQueue,closeModalWithoutQueueing:this.closeModalWithoutQueueing});return o.a.createElement("div",{className:"App"},this.state.modalVisible?e:null,o.a.createElement("div",{className:"wrapper",style:{display:"flex",flexDirection:"row wrap",padding:"10px 2px",height:"98vh",width:"90vw",margin:"0 auto"}},o.a.createElement(f,{addSongHandler:this.addSongToQueue,openAddSongModal:this.openAddSongModal}),o.a.createElement(E,{songQueue:this.state.songQueue,removeSongFromQueue:this.removeSongFromQueue})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.af38e05c.chunk.js.map