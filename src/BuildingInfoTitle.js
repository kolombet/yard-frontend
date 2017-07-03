import React, {Component} from 'react';

class BuildingInfoTitle extends Component {
  render() {
    return (
      <section className="building-info">
        <div className="line-full"/>

        <div className="container">
          <div className="building">
            <div className="building-info-block">
              <h1 className="building-title">Жилой комплекс «Полянка/44»</h1>
              <p className="building-location">Район Якиманка, улица Большая Полянка, дом 44 • 119180</p>
            </div>
            <button className="building-favorite-button">В избранное</button>
          </div>
        </div>
      </section>
    );
  }
}

export default BuildingInfoTitle;