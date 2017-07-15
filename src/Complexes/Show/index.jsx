import React from 'react';
import BodyClassName from 'react-body-classname';
import Gallery from './Gallery';
import Title from './Title';
import Features from './Features';
import Description from './Description';
import Infrastructures from './Infrastructures';
import Offers from './Offers';
import Guide from './Guide';
import Characteristics from './Characteristics';
import { getApi } from '../../api';

class Index extends React.Component {
  constructor() {
    super();
    this.state = { complex: {} };
  }

  componentDidMount() {
    const slug = this.props.match.params.slug;
    getApi(`complexes/${slug}`).then((json) => {
      this.setState({
        complex: json,
      });
    });
  }

  render() {
    const {
      location = {},
      images,
      name,
      details = {},
      fullDescription = '',
      amenities,
      units,
    } = this.state.complex;

    const { architect, developer } = details;
    const { street, house, subLocalityName } = location;

    return (
      <BodyClassName className="complexe">
        <div>
          <Title name={name} location={`${subLocalityName}, ${street}, ${house}`} />
          <Gallery images={images} />
          <Features offersCount={units} architect={architect} developer={developer} />
          <Characteristics complex={this.state.complex} />
          <Description title="Описание" text={fullDescription} />
          <Infrastructures infrastructures={amenities} />
          <Offers name={name} />
          <Guide />
        </div>
      </BodyClassName>
    );
  }
}

export default Index;
