import React from 'react';
import PropTypes from 'prop-types';
import BodyClassName from 'react-body-classname';
import Gallery from './Gallery';
import Title from './Title';
import Features from './Features';
import Description from './Description';
import Infrastructures from './Infrastructures';
import Offers from './Offers';
import Guide from './Guide';
import Characteristics from './Characteristics';
import { getComplex } from '../../util';

class Index extends React.Component {
  constructor() {
    super();
    this.state = { complex: null };
  }

  componentDidMount() {
    getComplex(this.props.match.params.id).then((json) => {
      this.setState({
        complex: json,
      });
    });
  }

  render() {
    if (!this.state.complex) return null;

    const { location, images, name, details, statistics } = this.state.complex;
    const { resalePropertiesCount } = statistics;
    const { architect } = details;
    const { street, house, subLocalityName } = location;

    const characteristics = {
      propertiesCount: 0,
      status: '',
      price: {
        min: 0,
        max: 100,
      },
      security: 'secure',
      constructionType: 'beton',
      area: {
        min: 0,
        max: 100,
      },
      ceilHeight: {
        min: 0,
        max: 100,
      },
      maintenanceCosts: 100500,
    };

    return (
      <BodyClassName className="complexe">
        <div>
          <Title name={name} location={`${subLocalityName}, ${street}, ${house}`} />
          <Gallery images={images} />
          <Features
            offersCount={resalePropertiesCount}
            architect={architect}
            developer="Группа «ПСН»"
          />
          <Characteristics {...characteristics} />
          <Description />
          <Infrastructures />
          <Offers />
          <Guide />
        </div>
      </BodyClassName>
    );
  }
}

Index.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Index;
