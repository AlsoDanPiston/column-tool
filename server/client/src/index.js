import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import HomeScreen from './components/HomeScreen.js'
import MatchScreen from './components/MatchScreen.js'
import ScriptScreen from './components/ScriptScreen.js'
import ManageScreen from './components/ManageScreen.js'

import rootReducer from './reducers/'

import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk),))

//const store = createStore(rootReducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/match" component={MatchScreen} />
        <Route exact path="/script" component ={ScriptScreen} />
        <Route exact path="/manage" component={ManageScreen} />
        <Route exact path="/" component={HomeScreen} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

