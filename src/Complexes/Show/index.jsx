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

class Index extends React.Component {
  constructor() {
    super();
    this.state = { complex: {} };
  }

  componentDidMount() {
    const slug = this.props.match.params.slug;
    get(`complexes/${slug}`).then((json) => {
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
      fullDescription = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      amenities,
      units = '123',
    } = this.state.complex;

    const { architect = 'mr.architect', developer = 'hello company' } = details;
    const { street, house, subLocalityName } = location;

    return (
      <BodyClassName className="complexe">
        <div>
          <Title name={name} location={`${subLocalityName}, ${street}, ${house}`} />
          {images && <Gallery images={images} />}
          <Features offersCount={units} architect={architect} developer={developer} />
          {this.state.complex.details && <Characteristics complex={this.state.complex} />}
          {fullDescription.length > 0 &&
            <Description title="Описание" fullDescription={fullDescription} />}
          {/* {amenities && amenities.length > 0 && <Amenities amenities={amenities} />} */}
          {/* <Offers name={name} /> */}
          {/* <Guide /> */}
        </div>
      </BodyClassName>
    );
  }
}

export default Index;
