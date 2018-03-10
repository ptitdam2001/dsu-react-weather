import React, {Component} from 'react';
import Flexbox from 'flexbox-react';
import _head from 'lodash/head';

import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import { Scrollbars } from 'react-custom-scrollbars';


import OpenWeatherService from '../../services/openWeatherMap';
import WeatherIcon from '../weatherIcon/weatherIcon';

import 'react-flexbox-grid/dist/react-flexbox-grid.css';

import './widget.css';

const paperStyle = {};

class WeatherWidget extends Component {

    constructor(props) {
        super(props);
        this.state = {
            token: props.token,
            weather: {}
        };
    }
    
    componentDidMount() {
        (new OpenWeatherService(this.state.token)).findByCity('Paris', 'fr').then(result => {
            console.log(result);
            this.setState({
                weather: Object.assign({}, result),
                icon: _head(result.weather).icon,
                iconId: _head(result.weather).id
            });
        }).catch(error => console.warn(error));
    }

    componentWillUnmount() {}

    
    handleClick(evt) {
        evt.preventDefault();
    }

    openMenu(evt) {
        alert('Open menu');
        evt.preventDefault();
    }

    render() {
        return (
            <Flexbox flexDirection="row" width="100%" padding="5px">
                <Flexbox flexGrow={50}>
                    <Paper style={paperStyle} zDepth={2}>
                        <AppBar title={this.state.weather.name} iconClassNameRight="muidocs-icon-navigation-expand-more" onLeftIconButtonClick={this.openMenu}/>
                        <div>
                        { this.state.icon && this.state.weather && <img src={'http://openweathermap.org/img/w/' + this.state.icon + '.png'} alt={_head(this.state.weather.weather).main}/>}
                        { this.state.iconId && <WeatherIcon name={this.state.iconId} size="50"/> }
                        </div>
                        <Scrollbars className="area" autoHeight autoHeightMax={400}>
                            <pre>{JSON.stringify(this.state.weather, null, 2)}</pre>
                        </Scrollbars>

                    </Paper>
                </Flexbox>
                <Flexbox flexGrow={50}>Coucou</Flexbox>
            </Flexbox>
        );
    }
}

export default WeatherWidget;