import React from 'react';
import BodyClassName from 'react-body-classname';
import Gallery from './Gallery';
import Title from './Title';
import Features from './Features';
import Description from './Description';
import Amenities from './Amenities';
import Offers from './Offers';
import Guide from './Guide';
import Characteristics from './Characteristics';
import { get } from '../../api';
import dummy from './dummy';

class Index extends React.Component {
  constructor() {
    super();
    this.state = { complex: {} };
  }

  componentDidMount() {
    const slug: string = this.props.match.params.slug;
    get(`complexes/${slug}`).then((data) => {
      this.setState({ complex: data });
    });
  }

  render() {
    const { complex } = this.state;
    const {
      location = {},
      images,
      name,
      details = {},
      fullDescription = '',
      amenities,
      units,
    } = complex;

    const { architect = '', developer = '' } = details;
    const { street, house, subLocalityName } = location;

    const offers: Array<OfferType> = [
      { rooms: 5, area: { min: 20, max: 50 }, price: { min: 5, max: 10 } },
      { rooms: 5, area: { min: 20, max: 50 }, price: { min: 5, max: 10 } },
      { rooms: 5, area: { min: 20, max: 50 }, price: { min: 5, max: 10 } },
    ];

    return (
      <BodyClassName className="complexe">
        <div>
          <Title name={name} location={`${subLocalityName}, ${street}, ${house}`} />
          {images && <Gallery images={images} />}

          <Features offersCount={units} architect={architect} developer={developer} />
          {complex.details && <Characteristics complex={complex} />}
          {fullDescription.length > 0 &&
            <Description title="Описание" fullDescription={fullDescription} />}
          {amenities && amenities.length > 0 && <Amenities amenities={amenities} />}
          <Offers offers={offers} name={name} />
          <Guide />
        </div>
      </BodyClassName>
    );
  }
}

export default Index;
