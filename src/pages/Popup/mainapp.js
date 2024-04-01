import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../../containers/Root';
import { updateApplicationState } from '../../services/watcher-service';

require('./bugfix');

const { state } = {};
const initialState = JSON.parse(state || '{}');

const createStore = require('../../store/configure-store');

const store = createStore(initialState);
ReactDOM.render(<Root store={store} />, document.querySelector('#root'));

updateApplicationState(store);
