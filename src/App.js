import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import './App.css'
import Main from './container/Main'
import Exercise from './container/Exercise'
import Knowledge from './container/Knowledge'
import Question from './container/Question'

class App extends Component {

  render() {
    return (  
      <div className="main">
        <Router>
          <div>
            <Route exact path="/" component={Main} />
            <Route path="/exercise" component={Exercise} />
            <Route path="/knowledge/:id?" component={Knowledge} />
            <Route path="/question/:id?" component={Question} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
