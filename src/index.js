import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoBox from './components/todobox/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TodoBox />, document.getElementById('root'));
registerServiceWorker();
