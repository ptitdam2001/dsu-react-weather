import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerId = setInterval( () => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
          <div>{this.state.date.toLocaleTimeString()}</div>  
        );
    }
}

// setInterval(Time, 1000);

export default Clock;