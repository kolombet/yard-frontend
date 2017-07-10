import React, { Component } from 'react';
import './App.css';
import Show from './Complexes/Show';
import List from './Complexes/List';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={List} />
          <Route path="/complexes/id" component={Show} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
