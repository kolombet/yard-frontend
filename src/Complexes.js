import React, {Component} from 'react';
import './App.css';

import Header from './Header';
import Footer from './Footer';
import Banner from "./Banner";
import Contact from "./Contact";
import Cards from "./Cards";

class Complexes extends Component {
  render() {
    return (
    <div className="App">
      <div className="complexes">
        <Header/>
        <Banner/>
        <Contact/>
        <Cards/>
        <Footer/>
      </div>
    </div>
    );
  }
}

export default Complexes;
