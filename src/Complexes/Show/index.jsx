// @flow

import React from 'react';
import BodyClassName from 'react-body-classname';
import shortid from 'shortid';
import Gallery from './Gallery';
import Title from './Title';
import Features from './Features';
import Description from './Description';
import Amenities from './Amenities';
import Offers from './Offers';
import Guide from './Guide';
import Characteristics from './Characteristics';
import { get } from '../../api';
import type { Complex as ComplexType, Offer as OfferType, Amenity as AmenityType } from '../types';

type Props = {
  match: {
    params: {
      slug: string,
    },
  },
};

const offers: Array<OfferType> = [
  { id: shortid.generate(), rooms: 5, area: { min: 20, max: 50 }, price: { min: 5, max: 10 } },
  { id: shortid.generate(), rooms: 5, area: { min: 20, max: 50 }, price: { min: 5, max: 10 } },
  { id: shortid.generate(), rooms: 5, area: { min: 20, max: 50 }, price: { min: 5, max: 10 } },
];

const amenitiesDummy: Array<AmenityType> = [
  { id: shortid.generate(), name: 'Бассейн' },
  { id: shortid.generate(), name: 'Школа' },
  { id: shortid.generate(), name: 'Частная школа' },
  { id: shortid.generate(), name: 'Пруд' },
  { id: shortid.generate(), name: 'Детский сад' },
  { id: shortid.generate(), name: 'Парк' },
  { id: shortid.generate(), name: 'Школа' },
  { id: shortid.generate(), name: 'Частная школа' },
  { id: shortid.generate(), name: 'Пруд' },
  { id: shortid.generate(), name: 'Школа' },
  { id: shortid.generate(), name: 'Частная школа' },
  { id: shortid.generate(), name: 'Пруд' },
];

class Index extends React.Component {
  state = { complex: {} };

  state: {
    complex: ComplexType,
  };

  componentDidMount() {
    const slug = this.props.match.params.slug;

    get(`complexes/${slug}`).then((complex: ComplexType) => {
      this.setState({ complex });
    });
  }

  props: Props;

  render() {
    const { complex } = this.state;
    const {
      location = {},
      images,
      name,
      details = {},
      fullDescription = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      amenities,
      units = 1234,
    } = this.state.complex;

    const { architect = 'test', developer = 'test' } = details;
    const { street, house, subLocalityName } = location;

    return (
      <BodyClassName className="complexe">
        <div>
          <Title name={name} location={`${subLocalityName}, ${street}, ${house}`} />
          {images && <Gallery images={images} />}
          <Features offersCount={units} architect={architect} developer={developer} />
          {complex.details && <Characteristics complex={complex} />}
          {fullDescription.length > 0 &&
            <Description title="Описание" fullDescription={fullDescription} />}
          {amenitiesDummy && amenitiesDummy.length > 0 && <Amenities amenities={amenitiesDummy} />}
          <Offers offers={offers} name={name} />
          <Guide />
        </div>
      </BodyClassName>
    );
  }
}

export default Index;
