import React, {Component} from 'react';
import Banner from "./Banner";
import Contact from "./Contact";
import Cards from "./Cards";

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
