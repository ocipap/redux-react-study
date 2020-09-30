import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import rootReducer from './store/modules';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);


ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
