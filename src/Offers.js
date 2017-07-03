import React, {Component} from 'react';
import Offer from './Offer';

class Offers extends Component {
  render() {
    return (
      <section className="offer">
        <div className="container">
          <div className="row center-md">
            <h2 className="offer-main-title">Предложения в ЖК «Полянка/44»</h2>
          </div>
          <div className="row">
            <Offer title="1-комнатные квартиры" area="от 59 до 120 м²" price="от 20.3 до 84.2 млн руб"/>
            <Offer title="1-комнатные квартиры" area="от 59 до 120 м²" price="от 20.3 до 84.2 млн руб"/>
            <Offer title="1-комнатные квартиры" area="от 59 до 120 м²" price="от 20.3 до 84.2 млн руб"/>
          </div>
        </div>
      </section>
    );
  }
}

export default Offers;