import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';

import OpenWeatherService from '../../services/openWeatherMap';

import 'react-flexbox-grid/dist/react-flexbox-grid.css';

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
            this.setState({weather: Object.assign({}, result)});
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
            <Grid fluid>
                <Row>
                    <Col xs={6} md={6}>
                        <Paper style={paperStyle} zDepth={2}>
                            <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more" onLeftIconButtonClick={this.openMenu}/>
                            <pre>{JSON.stringify(this.state.weather, null, 2)}</pre>
                        </Paper>
                    </Col>
                    <Col md={6}>coucou</Col>
                </Row>
            </Grid>
        );
    }
}

export default WeatherWidget;