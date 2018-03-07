import React, { Component } from 'react';
import './App.css';
import Header from '../../components/header/header';
import Clock from '../../components/time/time';
import WeatherWidget from '../../components/weatherWidget/widget';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends Component {

  onSelect(currentDate) {
    alert(currentDate);
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className="App">
          <Header name="Damien"/>
          <div className="App-intro">
            <Clock onSelect={this.onSelect}/>
            <WeatherWidget token="59fd2768e2c9abcb3cf35e48643a34f5"/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
