import React from 'react';
import ReactDOM from 'react-dom';
import './css/theme.css';
import './css/mobile/themeMobile.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
