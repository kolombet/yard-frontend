import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import rightArrow from './img/right-arrow.svg';

class Header extends Component {
  render() {
    return (
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
              <Link to='/' className="footer-link">ВТБ Арена Парк</Link>
              <Link to='/' className="footer-link">Садовые кварталы</Link>
              <Link to='/' className="footer-link">Резиденция Монэ</Link>
              <Link to='/' className="footer-link footer-all">Все ЖК
                Москвы<img src={rightArrow} className="footer-arrow" alt=""/>
              </Link>
            </nav>
            <nav className="col-md-2">
              <hr className="footer-line"/>
              <h4 className="footer-title">Компания</h4>
              <Link to='/' className="footer-link">Команда</Link>
              <Link to='/' className="footer-link">О компании</Link>
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
    );
  }
}

export default Header;

