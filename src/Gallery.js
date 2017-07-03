import React, {Component} from 'react';
import gallery from './img/gallery/1/bitmap@2x.jpg';

class Gallery extends Component {
  render() {
    return (
      <div className="complex-gallery">
        <img src={gallery} alt="gallery" className="complex-gallery-item"/>
        <img src={gallery} alt="gallery" className="complex-gallery-item"/>
        <img src={gallery} alt="gallery" className="complex-gallery-item"/>
        <img src={gallery} alt="gallery" className="complex-gallery-item"/>
        <img src={gallery} alt="gallery" className="complex-gallery-item"/>
        <img src={gallery} alt="gallery" className="complex-gallery-item"/>
        <img src={gallery} alt="gallery" className="complex-gallery-item"/>
        <img src={gallery} alt="gallery" className="complex-gallery-item"/>

        <button className="gallery-button">41 фотография</button>
      </div>
    );
  }
}

export default Gallery;