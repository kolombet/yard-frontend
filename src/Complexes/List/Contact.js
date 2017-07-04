import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <section className="container">
        <div className="row center-md">
          <div className="contact-container">
            <h2 className="contact-title">Discover Our New Developments</h2>
            <p className="contact-description">
              Compass brings a modern approach to new development marketing and
              sales. From boutique rental conversions to luxurious ground-up
              condominiums, browse our portfolio of current offerings.
            </p>
            <button className="contact-button">
              <p className="contact-button-label">Contact The Team</p>
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
