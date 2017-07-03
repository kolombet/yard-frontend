import React, {Component} from 'react';
import Card from "./Card";

class Cards extends Component {
  render() {
    return (
      <section className="container">
        <Card/>
        <Card/>
        <Card/>
      </section>
    );
  }
}

export default Cards;


