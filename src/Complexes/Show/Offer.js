import React, { Component } from "react";

class Offer extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="offer-block">
          <h3 className="offer-title">
            {this.props.rooms}-комнатные квартиры
          </h3>
          <p className="offer-area">Площадь</p>
          <p className="offer-area-value">
            от {this.props.area.min} до {this.props.area.max} м²
          </p>
          <p className="offer-price">Стоимость</p>
          <p className="offer-price-value">
            от {this.props.price.min} до {this.props.price.max} млн руб
          </p>
          <div className="row center-md">
            <button className="offer-button">Посмотреть предложения</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Offer;
