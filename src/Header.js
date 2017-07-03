import React, {Component} from 'react';
import compassLogo from './img/compass-logo.svg';
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="header-container">
            <img className="header-logo" src={compassLogo} alt="compass logo"/>
            <nav className="header-navigation">
              <Link to='/' className="header-link">Купить</Link>
              <Link to='/' className="header-link">Снять</Link>
              <Link to='/' className="header-link">Наши агенты</Link>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;