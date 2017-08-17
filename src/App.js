import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css'
import Main from './components/Main'
import Exercise from './components/Exercise'

class App extends Component {

  render() {
    return (  
      <div className="main">
        <Router>
          <div>
            <Route exact path="/" component={Main} />
            <Route path="/exercise" component={Exercise} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
