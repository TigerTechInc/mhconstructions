import React, {Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


import HomePage from './components/HomePage';
import NavBar from './components/Nav/Nav';

library.add(fab, faCoffee, faEnvelope );

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div>
            <Switch>
              <Route path="/" component={HomePage} exact/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
