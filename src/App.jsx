import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import 'normalize.css';
import ScrollToTop from './Components/ScrollToTop';
import './App.css';
import Show from './Complexes/Show';
import List from './Complexes/List';
import Header from './Header';
import Footer from './Footer';

export default () =>
  (<Router>
    <ScrollToTop>
      <div className="App">
        <Header />
        <Redirect from="/" to="/complexes" />
        <Route exact path="/complexes/" component={List} />
        <Route path="/complexes/:slug" component={Show} />
        <Footer />
      </div>
    </ScrollToTop>
  </Router>);
