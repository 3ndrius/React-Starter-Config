import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Go from './components/Go';
import Todos from './components/Todos';





ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Go /> , document.getElementById('go'));
ReactDOM.render(<Todos /> , document.getElementById('todos'));

