import React, { Component } from 'react';
import Flexbox from 'flexbox-react';

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
        <Flexbox flexDirection="column" minHeight="100vh">
          <Flexbox height="150px" className="App">
            <Header name="Damien"/>
          </Flexbox>
          <Flexbox flexGrow={1} flexDirection="column" padding="10px">
            <div>
              <Clock onSelect={this.onSelect}/>
            </div>
            <Flexbox flexGrow={1}>
              <WeatherWidget token="59fd2768e2c9abcb3cf35e48643a34f5"/>
            </Flexbox>
          </Flexbox>
          <Flexbox element="footer" height="60px">
            Footer
          </Flexbox>
        </Flexbox>
      </MuiThemeProvider>
    );
  }
}

export default App;
