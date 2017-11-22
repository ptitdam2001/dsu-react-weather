import React, { Component } from 'react';
import './App.css';
import Header from '../../components/header/header';
import Clock from '../../components/time/time';
import WeatherWidget from '../../components/weatherWidget/widget';

class App extends Component {

  onSelect(currentDate) {
    alert(currentDate);
  }

  render() {
    return (
      <div className="App">
        <Header name="Damien"/>
        <div className="App-intro">
          <Clock onSelect={this.onSelect}/>
          <WeatherWidget token="59fd2768e2c9abcb3cf35e48643a34f5"/>
        </div>
      </div>
    );
  }
}

export default App;
