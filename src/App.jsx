import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Show from './complexes/show/index';
import List from './complexes/list/index';
import Header from './Header';
import Footer from './Footer';

export default () =>
  (<Router>
    <div className="App">
      <Header />
      <Route exact path="/" component={List} />
      <Route path="/complexes/id" component={Show} />
      <Footer />
    </div>
  </Router>);
