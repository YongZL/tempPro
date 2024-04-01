import './Popup.css';
import React, { Component } from "react";
import { Provider } from "react-redux";
import App from '../../containers/app.container'
import '../../containers/i18n'
import { updateApplicationState } from '../../services/watcher-service';
require('../../../browser/extension/bugfix');



export default class Popup extends Component {
  render() {

    const { state } = {};

    const initialState = JSON.parse(state || '{}');

    const createStore = require('../../store/configure-store');

    const store = createStore(initialState);
    updateApplicationState(store);

    console.log('storestore', store);


    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}


