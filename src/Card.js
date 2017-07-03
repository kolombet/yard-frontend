import React, {Component} from 'react';
import buildingPreview from './img/bitmap.jpg';
import { Link } from 'react-router-dom'

class Card extends Component {
  render() {
    return (
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
    );
  }
}

export default Card;


