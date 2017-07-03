import React, {Component} from 'react';
import './App.css';
import Complex from './Complex';
import Complexes from './Complexes';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Complexes}/>
          <Route path='/complex' component={Complex}/>
        </div>
      </Router>
    );
  }
}

export default App;
