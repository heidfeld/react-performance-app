Client React Application

Just clone repository and run from the root project directory

npm start

Inside file package.json create proxy to your server-side application e.g.

"proxy": "http://localhost:3001"

Endpoints are configured inside Button Components e.g.

Button/Button.js

onClick() {
        fetch('/performance/algorithm/1')
            .then(response => response.json())
            .then(text => this.props.changeText(JSON.stringify(text)))
            .catch(error => console.error(error));
    }
