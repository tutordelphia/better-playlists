import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


let defaultTextColor = "#fff"

class Aggregation extends Component {
  render () {
    return (
      <div style={{width: "40%", display: "inline-block"}}>
        <h2 style={{color: defaultTextColor}}>Number Text</h2>
      </div>
    );
  }
}


class Filter extends Component {
  render() {
    return (
      <div style={{color: defaultTextColor}}>
        <img/>
        <input type="text"/>
      </div>
    )
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{color: defaultTextColor}}>
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
  render() {

    return (
      <div className="App">
        <h1>Title</h1>
        <Aggregation/>
        <Aggregation/>
        <Filter/>
        <Playlist/>
      </div>
    );
  }
}

export default App;
