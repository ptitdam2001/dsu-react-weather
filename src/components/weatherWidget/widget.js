import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import OpenWeatherService from '../../services/openWeatherMap';

import 'react-flexbox-grid/dist/react-flexbox-grid.css';

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
            this.setState({weather: Object.assign({}, result)});
        }).catch(error => console.warn(error));
    }

    componentWillUnmount() {}

    

    handleClick(evt) {
        evt.preventDefault();
    }

    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col xs={6} md={6}>
                        <pre>{JSON.stringify(this.state.weather, null, 2)}</pre>
                    </Col>
                    <Col md={6}>coucou</Col>
                </Row>
            </Grid>
        );
    }
}

export default WeatherWidget;