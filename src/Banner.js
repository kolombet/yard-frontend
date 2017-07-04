import React, { Component } from "react";
import compassDevelopmentLogo from "./img/compass-development-logo.svg";

class Banner extends Component {
  render() {
    return (
      <section className="banner">
        <div className="container">
          <div className="row center-md">
            <img
              className="banner-image"
              src={compassDevelopmentLogo}
              alt="compass development logo"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
