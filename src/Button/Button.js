import React, {Component} from 'react';

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'jebac'
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            title: new Date().toLocaleTimeString()
        });
        //fetch('http://localhost:8080/rest/algorithm/external')
        fetch('/performance')
            .then(response => response.json())
            .then(text => this.props.changeText(text.toString()))
            .catch(error => console.error(error));
    }

    render() {
        return (<button onClick={this.onClick}>{this.state.title}</button>);
    }
};
