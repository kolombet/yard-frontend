import React from 'react';
import BodyClassName from 'react-body-classname';
import Banner from './Banner';
import Contact from './Contact';
import Cards from './Cards';

export default () =>
  (<BodyClassName className="complexes">
    <div>
      <Banner />
      <Contact />
      <Cards />
    </div>
  </BodyClassName>);
