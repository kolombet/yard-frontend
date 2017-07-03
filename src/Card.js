import React, {Component} from 'react';
import buildingPreview from './img/bitmap.jpg';
import { Link } from 'react-router-dom'

class Card extends Component {
  render() {
    return (
      <Link to='/complex' className="card-link">
        <img src={buildingPreview} className="bitmap complex-card-img" alt="building preview"/>
        <article className="card-info">
          <p className="card-location">{this.props.title}</p>
          <h3 className="card-address">{this.props.address}</h3>
          <p className="card-description">{this.props.description}</p>
        </article>
      </Link>
    );
  }
}

export default Card;


