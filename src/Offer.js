import React, {Component} from 'react';

class Offer extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="offer-block">
          <h3 className="offer-title">{this.props.title}</h3>
          <p className="offer-area">Площадь</p>
          <p className="offer-area-value">{this.props.area}²</p>
          <p className="offer-price">Стоимость</p>
          <p className="offer-price-value">{this.props.price}</p>
          <div className="row center-md">
            <button className="offer-button">Посмотреть предложения</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Offer;