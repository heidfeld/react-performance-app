import React, {Component} from 'react';

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Run Algorithm'
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        fetch('/performance/algorithm/1')
            .then(response => response.json())
            .then(text => this.props.changeText(JSON.stringify(text)))
            .catch(error => console.error(error));
    }

    render() {
        return (<button className="App-button" onClick={this.onClick}><span>{this.state.title}</span></button>);
    }
};
