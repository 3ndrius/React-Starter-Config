import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Go from './components/Go';

var myObject = { name: "John", age: "22", height:"180"};

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Go   person={myObject} /> , document.getElementById('test'));
