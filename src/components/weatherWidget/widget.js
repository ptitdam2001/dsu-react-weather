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
            lang: props.lang ? props.lang : 'fr',
            weather: {}
        };
    }
    
    componentDidMount() {
        (new OpenWeatherService(this.state.token, this.state.lang)).findByCity('Paris', 'fr').then(result => {
            console.log(result);
            this.setState({
                weather: Object.assign({}, result),
                icon: _head(result.weather).icon,
                description: _head(result.weather).description,
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
                        <Flexbox flexDirection="row" maxHeight="150px" padding="5px">
                            <Flexbox element="section" width="25%">
                                { this.state.iconId && <WeatherIcon name={this.state.iconId} size="50"/> }
                            </Flexbox>
                            <Flexbox element="section" width="75%">
                                { this.state.description }
                            </Flexbox>
                        </Flexbox>

                        
                        
                        
                        <div>
                        { this.state.icon && this.state.weather && <img src={'http://openweathermap.org/img/w/' + this.state.icon + '.png'} alt={_head(this.state.weather.weather).main}/>}
                        
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