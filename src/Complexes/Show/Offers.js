import React, { Component } from "react";
import Offer from "./Offer";

class Offers extends Component {
  render() {
    return (
      <section className="offers">
        <div className="container">
          <div className="row center-md">
            <h2 className="offer-main-title">Предложения в ЖК «Полянка/44»</h2>
          </div>
          <div className="row">
            <Offer
              rooms={1}
              area={{ min: 59, max: 120 }}
              price={{ min: 20.3, max: 84.2 }}
            />
            <Offer
              rooms={1}
              area={{ min: 59, max: 120 }}
              price={{ min: 20.3, max: 84.2 }}
            />
            <Offer
              rooms={1}
              area={{ min: 59, max: 120 }}
              price={{ min: 20.3, max: 84.2 }}
            />
          </div>
        </div>
      </section>
    );
  }
}
export default Offers;
