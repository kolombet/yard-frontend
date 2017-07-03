import React, {Component} from 'react';

class BuildingInfoCharacteristics extends Component {
  render() {
    return (
      <section className="container">
        <h2 className="characteristics-title">Характеристики</h2>
        <div className="row">
          <div className="col-md-4">
            <dl className="characteristics-list">
              <dt className="characteristics-key">Количество квартир:</dt>
              <dd className="characteristics-value">1 503</dd>
              <dt className="characteristics-key">Статус:</dt>
              <dd className="characteristics-value">Квартиры</dd>
              <dt className="characteristics-key">Цены:</dt>
              <dd className="characteristics-value">от 5.3 до 143.5 млн</dd>
            </dl>
          </div>
          <div className="col-md-4">
            <dl className="characteristics-list">
              <dt className="characteristics-key">Количество квартир:</dt>
              <dd className="characteristics-value">1 503</dd>
              <dt className="characteristics-key">Количество квартир:</dt>
              <dd className="characteristics-value">1 503</dd>
              <dt className="characteristics-key">Количество квартир:</dt>
              <dd className="characteristics-value">1 503</dd>
            </dl>
          </div>
          <div className="col-md-4">
            <dl className="characteristics-list">
              <dt className="characteristics-key">Количество квартир:</dt>
              <dd className="characteristics-value">1 503</dd>
              <dt className="characteristics-key">Количество квартир:</dt>
              <dd className="characteristics-value">1 503</dd>
              <dt className="characteristics-key">Количество квартир:</dt>
              <dd className="characteristics-value">1 503</dd>
            </dl>
          </div>
        </div>
      </section>
    );
  }
}

export default BuildingInfoCharacteristics;