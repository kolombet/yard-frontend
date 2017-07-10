import React from 'react';
import BodyClassName from 'react-body-classname';
import Gallery from './Gallery';
import Title from './Title';
import Features from './Features';
import Description from './Description';
import Infrastructure from './Infrastructure';
import Offers from './Offers';
import Guide from './Guide';
import Characteristics from './Characteristics';

export default () =>
  (<BodyClassName className="complexe">
    <div>
      <Title />
      <Gallery />
      <Features />
      <Characteristics />
      <Description />
      <Infrastructure />
      <Offers />
      <Guide />
    </div>
  </BodyClassName>);
