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
        <Route exact path="/" component={() => <Redirect to="/complexes/list" />} />
        <Route exact path="/complexes/list" component={List} />
        <Route path="/complexes/show/:slug" component={Show} />
        <Footer />
      </div>
    </ScrollToTop>
  </Router>);
