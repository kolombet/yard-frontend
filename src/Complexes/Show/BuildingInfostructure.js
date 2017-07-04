import React, { Component } from "react";

class BuildingInfoInfrastructure extends Component {
  render() {
    return (
      <section className="container">
        <div className="infrastructure-wrapper">
          <div className="row">
            <div className="col-md-2">
              <h2 className="infrastructure-title">Инфраструктура</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              <p className="infrastructure-item">Бассейн</p>
            </div>
            <div className="col-md-2">
              <p className="infrastructure-item">Детский сад</p>
            </div>
            <div className="col-md-2">
              <p className="infrastructure-item">Частная школа</p>
            </div>
            <div className="col-md-2">
              <p className="infrastructure-item">Бассейн</p>
            </div>
            <div className="col-md-2">
              <p className="infrastructure-item">Детский сад</p>
            </div>
            <div className="col-md-2">
              <p className="infrastructure-item">Частная школа</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              <p className="infrastructure-item">Частная школа</p>
            </div>
            <div className="col-md-2">
              <p className="infrastructure-item">Частная школа</p>
            </div>
            <div className="col-md-2">
              <p className="infrastructure-item">Частная школа</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BuildingInfoInfrastructure;
