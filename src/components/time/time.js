import React, {Component} from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
            onSelect: () => {}
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);

        this.setState(function (prevState, props) {
            return {
                onSelect: props.onSelect
            };
        });
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    handleClick(evt) {
        evt.preventDefault();
        if (typeof this.state.onSelect === 'function') {
            this.state.onSelect(this.state.date);
        }
    }

    render() {
        return ( 
            <span>
                <div> {this.state.date.toLocaleTimeString()} </div>
                <button onClick = {this.handleClick}> Click </button>
            </span>
        );
    }
}

export default Clock;