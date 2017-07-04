import React, {Component} from 'react';
import '../App.css';

import Banner from "./List/Banner";
import Contact from "./List/Contact";
import Cards from "./List/Cards";

class Complexes extends Component {
  render() {
    return (
    <div className="App">
      <div className="complexes">
        <Banner/>
        <Contact/>
        <Cards/>
      </div>
    </div>
    );
  }
}

export default Complexes;
