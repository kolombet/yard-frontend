import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Show from './Complexes/Show';
import List from './Complexes/List';
import Header from './Header';
import Footer from './Footer';

export default () =>
  (<Router>
    <div className="App">
      <Header />
      <Header />
      <Route exact path="/" component={List} />
      <Route path="/complexes/id" component={Show} />
      <Footer />
    </div>
  </Router>);
