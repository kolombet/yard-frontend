import React, {Component} from 'react';
import './App.css';
import compassLogo from './img/compass-logo.svg';
import compassDevelopmentLogo from './img/compass-development-logo.svg';
import buildingPreview from './img/bitmap.jpg';
import rightArrow from './img/right-arrow.svg';

class App extends Component {
  render() {
    return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="header-container">
            <img className="header-logo" src={compassLogo} alt="compass logo"/>
            <nav className="header-navigation">
              <a className="header-link" href="#">Купить</a>
              <a className="header-link" href="#">Снять</a>
              <a className="header-link" href="#">Наши агенты</a>
            </nav>
          </div>
        </div>
      </header>

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
        <a className="card-link">
          <img src={buildingPreview} className="bitmap complex-card-img" alt="building preview"/>
          <article className="card-info">
            <p className="card-location">SOUTH BEACH, SAN FRANCISCO</p>
            <h3 className="card-address">764 Metropolitan Avenue</h3>
            <p className="card-description">The Lewis Steel Building is a masterful industrial conversion located in
              the heart of Williamsburg. Located at 76 North 4th Street, the former 1930's steel factory has been
              transformed into 83 individually unique and luxury loft apartments.</p>
          </article>
        </a>
        <a className="card-link">
          <img src={buildingPreview} className="bitmap complex-card-img" alt="building preview"/>
          <article className="card-info">
            <p className="card-location">MIDTOWN EAST, MANHATTAN</p>
            <h3 className="card-address">100 East 53rd Street</h3>
            <p className="card-description">One Hundred East Fifty Third Street by Foster + Partners is a limited
              collection of
              modern residences in Midtown Manhattan's Cultural District. The 94 residences ranging from alcove lofts to
              four bedrooms within the 63-story tower are generously proportioned.</p>
          </article>
        </a>
        <a className="card-link">
          <img src={buildingPreview} className="bitmap complex-card-img" alt="building preview"/>
          <article className="card-info">
            <p className="card-location">NOLITA, MANHATTAN</p>
            <h3 className="card-address">152 Elizabeth</h3>
            <p className="card-description">152 Elizabeth is an ultra-luxury condominium building—the first in New York
              City
              designed by Japanese master architect Tadao Ando. Located at the corner of Kenmare and Elizabeth Streets
              in
              Nolita, the 32,000-square-foot building will stand as a profound architectural statement and embrace the
              industrial character of the neighborhood.</p>
          </article>
        </a>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <h4 className="footer-title">ООО «Ярд»</h4>
              <p className="footer-text">ОГРН 1175074002531</p>
              <p className="footer-text">ИНН 5036165365</p>
              <p className="footer-text footer-phone">+7 (999) 821-14-88</p>
            </div>
            <nav className="col-md-2 col-md-offset-2">
              <hr className="footer-line"/>
              <h4 className="footer-title">Жилые комплексы</h4>
              <a className="footer-link" href="#">ВТБ Арена Парк</a>
              <a className="footer-link" href="#">Садовые кварталы</a>
              <a className="footer-link" href="#">Резиденция Монэ</a>
              <a className="footer-link footer-all" href="#">Все ЖК
                Москвы<img src={rightArrow} className="footer-arrow" alt=""/>
              </a>
            </nav>
            <nav className="col-md-2">
              <hr className="footer-line"/>
              <h4 className="footer-title">Компания</h4>
              <a className="footer-link" href="#">Команда</a>
              <a className="footer-link" href="#">О компании</a>
            </nav>
          </div>
          <div className="row">
            <div className="col-md-8 col-md-offset-4">
              <p className="footer-description">
                Любая информация, представленная на данном сайте, носит исключительно информационный характер и ни при
                каких условиях не является публичной офертой, определяемой положениями статьи 437 ГК РФ. © ООО «Ярд»,
                2017
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
    );
  }
}

export default App;
