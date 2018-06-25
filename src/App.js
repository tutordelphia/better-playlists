import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color: "#fff"
}

let sessionData = {
  user: {
    name: 'David',
    playlists: [
      {
        name: 'My favorites',
        songs: [
          {name: 'Beat It', duration: 1345}, 
          {name: 'Cannelloni Makaroni', duration: 1236},
          {name: 'Rosa helikopter', duration: 70000}
        ]
      },
      {
        name: 'Discover Weekly',
        songs: [
          {name: 'Beat It', duration: 1345}, 
          {name: 'Cannelloni Makaroni', duration: 1236},
          {name: 'Rosa helikopter', duration: 70000}
        ]
      },
      {
        name: 'Another playlist - the best!',
        songs: [
          {name: 'Beat It', duration: 1345}, 
          {name: 'Hallelujah', duration: 1236},
          {name: 'Rosa helikopter', duration: 70000}
        ]
      },
      {
        name: 'Playlist!',
        songs: [
          {name: 'Beat It', duration: 1345}, 
          {name: 'Cannelloni Makaroni', duration: 1236},
          {name: 'Hej Hej Monika', duration: 70000}
        ]
      }
    ]
  }
}

class PlaylistCounter extends Component {
  render() {
    return (
     <div style={{...defaultStyle, width: "40%", display: "inline-block"}}>
        <h2>{ this.props.playlists && this.props.playlists.length } Playlists</h2>
      </div> 
    )
  }
}
class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, playlist)=>{
        return songs.concat(playlist.songs)
      }, []
    )
    let duration = allSongs.reduce((total, song)=>{return total + song.duration}, 0)
    
    let hours = Math.round((duration / (60 * 60)) * 100) / 100
    return (
     <div style={{...defaultStyle, width: "40%", display: "inline-block"}}>
        <h2>{ this.props.playlists && hours } Hours</h2>
      </div> 
    )
  }
}
class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
        <img/>
        <input type="text"/>
      </div>
    )
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{...defaultStyle, width: "25%", display: "inline-block"}}>
        <img />
        <h3>Playlist name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
          <li>Song 4</li>
        </ul>
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {sessionData: {}}
  }
  componentDidMount() {
    setTimeout(()=>{
      this.setState({sessionData: sessionData})
    }, 1000)
  }
  render() {

    return (
      <div className="App">
        {
          this.state.sessionData.user ?
          <div>
            <h1 style={{...defaultStyle, fontSize: '54px' }}>{this.state.sessionData.user.name +"'s Playlist"  }</h1>
            <PlaylistCounter playlists={this.state.sessionData.user.playlists}/>
            <HoursCounter playlists={this.state.sessionData.user.playlists}/>
            <Filter/>
            <Playlist/>
            <Playlist/>
            <Playlist/>
            <Playlist/>
          </div> : <h1 style={defaultStyle}>Loading...</h1>
        }
      </div>
    );
  }
}

export default App;
