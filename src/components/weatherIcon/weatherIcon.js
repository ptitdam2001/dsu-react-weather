import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';

import {icon} from '../../services/weatherIcons';

import 'weathericons/css/weather-icons.min.css';
import 'weathericons/css/weather-icons-wind.min.css';

import extend from 'lodash/extend';

class WeatherIcon extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: icon(props.name),
            style: extend({}, props.style, props.size ? {'fontSize': props.size + 'px'} : {}),
            color: props.color,
            hoverColor: props.hover
        };
    }
    
    componentDidMount() { }

    componentWillUnmount() {}


    render() {
        return (
            <FontIcon
                className={this.state.name ? 'wi ' + this.state.name : ''}
                style={this.state.style}
                color={this.state.color}
                hoverColor={this.state.hoverColor} />
        );
    }
}

export default WeatherIcon;