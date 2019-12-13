import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import { data } from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';

const store = createStore(
  data,
  applyMiddleware(thunk)
)

let mountNode = document.getElementById("app");
ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
  <MuiThemeProvider>
     <Router>
       <Route path='/:about' component={App} />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  </BrowserRouter>,
  mountNode);