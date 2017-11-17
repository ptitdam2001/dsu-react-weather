import React, { Component } from 'react';
import './App.css';
import Header from '../../components/header/header';
import Clock from '../../components/time/time';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header name="Damien"/>
        <p className="App-intro">
          <Clock />
        </p>
      </div>
    );
  }
}

export default App;
