import React, { Component } from "react";
import { Link } from "react-router-dom";
import polyanka from "./img/polyanka/polyanka-photo.jpg";
import map from "./img/map.png";
import GuideNavigation from "./GuideNavigation";

class Guide extends Component {
  render() {
    return (
      <section className="guide">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="guide-info">
                <h3 className="guide-summary">Якиманка</h3>
                <h2 className="guide-title">
                  Исторический центр Москвы в двух километрах от Кремля
                </h2>
                <Link to="/" className="guide-link">
                  Гид по Якиманке →
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <img className="guide-photo" src={polyanka} alt="yakimanka" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img className="guide-map" src={map} alt="yakimanka map" />
            </div>
            <div className="col-md-6">
              <div className="guide-navigation">
                <GuideNavigation
                  title="Красный Октябрь"
                  distance="24 минуты, 6 км"
                />
                <GuideNavigation
                  title="World class"
                  distance="2 минуты, 300 м"
                />
                <GuideNavigation
                  title="Третьяковская галерея"
                  distance="14 минут, 4 км"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Guide;
