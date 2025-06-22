import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import './style.css';
import Home from './views/home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Home} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
