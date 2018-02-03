import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Game from './Tic';
import Todo from './components/todolist/Todo'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Todo/>, document.getElementById('root'));
registerServiceWorker();
