**Client React Application**

> Just clone repository and run from the root project directory

```
npm start
```

> Inside file create proxy to your server-side application e.g.

**package.json**

```
"proxy": "http://localhost:3001"
```

> Endpoints are configured inside Button Components e.g.

**Button/Button.js**

```
onClick() {
        fetch('/performance/algorithm/1')
}
```
