import React, {Component} from 'react';
import './App.css';
import compassDevelopmentLogo from './img/compass-development-logo.svg';
import buildingPreview from './img/bitmap.jpg';
import { Link } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';

class Complexes extends Component {
  render() {
    return (
    <div className="App">
      <div className="complexes">
        <Header/>

        <section className="banner">
          <div className="container">
            <div className="row center-md">
              <img className="banner-image" src={compassDevelopmentLogo} alt="compass development logo"/>
            </div>
          </div>
        </section>

        <section className="container">
          <div className="row center-md">
            <div className="contact-container">
              <h2 className="contact-title">Discover Our New Developments</h2>
              <p className="contact-description">Compass brings a modern approach to new development marketing and sales.
                From boutique rental conversions to luxurious ground-up condominiums, browse our portfolio of current
                offerings.</p>
              <button className="contact-button"><p className="contact-button-label">Contact The Team</p></button>
            </div>
          </div>
        </section>

        <section className="container">
          <Link to='/complex' className="card-link">
            <img src={buildingPreview} className="bitmap complex-card-img" alt="building preview"/>
            <article className="card-info">
              <p className="card-location">SOUTH BEACH, SAN FRANCISCO</p>
              <h3 className="card-address">764 Metropolitan Avenue</h3>
              <p className="card-description">The Lewis Steel Building is a masterful industrial conversion located in
                the heart of Williamsburg. Located at 76 North 4th Street, the former 1930's steel factory has been
                transformed into 83 individually unique and luxury loft apartments.</p>
            </article>
          </Link>
        </section>

        <Footer/>
      </div>
    </div>
    );
  }
}

export default Complexes;
