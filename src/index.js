import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import { data } from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import thunk from 'redux-thunk';

const store = createStore(
  data,
  applyMiddleware(thunk)
)

var mountNode = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}>
  <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  mountNode);