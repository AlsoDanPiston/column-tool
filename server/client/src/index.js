import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomeScreen from './components/HomeScreen.js'
import MatchScreen from './components/MatchScreen.js'

render(
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/match" component={MatchScreen} />
      </Switch>
    </Router>
  </div>,
  document.getElementById('root')
);

