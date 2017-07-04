import React from "react";
export default props =>
  <div className="col-md-4">
    <div className="offer-block">
      <h3 className="offer-title">
        {props.rooms}-комнатные квартиры
      </h3>
      <p className="offer-area">Площадь</p>
      <p className="offer-area-value">
        от {props.area.min} до {props.area.max} м²
      </p>
      <p className="offer-price">Стоимость</p>
      <p className="offer-price-value">
        от {props.price.min} до {props.price.max} млн руб
      </p>
      <div className="row center-md">
        <button className="offer-button">Посмотреть предложения</button>
      </div>
    </div>
  </div>;
