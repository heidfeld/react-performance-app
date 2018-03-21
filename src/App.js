import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button/Button'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: 'Welcome to React'
        };
        this.changeText = this.changeText.bind(this);
    }

    changeText(text){
        this.setState({text});
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title" dangerouslySetInnerHTML={{__html: this.state.text}}></h1>
                </header>
                <p className="App-intro">
                </p>
                <Button changeText={this.changeText}/>
            </div>
        );
    }
}

export default App;
