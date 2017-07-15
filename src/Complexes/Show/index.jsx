import React from 'react';
import PropTypes from 'prop-types';
import BodyClassName from 'react-body-classname';
import toFixed from 'number-to-fixed';
import Gallery from './Gallery';
import Title from './Title';
import Features from './Features';
import Description from './Description';
import Infrastructures from './Infrastructures';
import Offers from './Offers';
import Guide from './Guide';
import Characteristics from './Characteristics';
import { getComplex } from '../../api';
import {
  formatMillion,
  getSecurity,
  getConstruction,
  getKind,
  getFurniture,
  getCondition,
  getSaleOfferKind,
  getRenovate,
  getQuarter,
} from '../../util';

class Index extends React.Component {
  constructor() {
    super();
    this.state = { complex: null };
  }

  componentDidMount() {
    const slug = this.props.match.params.slug;
    getComplex(slug).then((json) => {
      this.setState({
        complex: json,
      });
    });
  }

  render() {
    if (!this.state.complex) return null;

    const {
      location,
      images,
      name,
      details,
      statistics,
      propertyDefaults,
      fullDescription = '',
      amenities,
      units,
    } = this.state.complex;

    const { propertiesCount, price, totalArea } = statistics;
    const {
      architect,
      security,
      constructionKind,
      ceilHeight,
      maintenanceCosts,
      propertyKind,
      startYear,
      startQuarter,
      commissioningYear,
      commissioningQuarter,
    } = details;
    const { street, house, subLocalityName } = location;
    const { information, saleOffer } = propertyDefaults;
    const { kind } = saleOffer;
    const { furniture, condition, renovate } = information;

    const characteristics = {
      propertiesCount,
      status: '',
      price: {
        min: formatMillion(price.from.rub),
        max: formatMillion(price.to.rub),
      },
      security: getSecurity(security),
      constructionType: getConstruction(constructionKind),
      area: {
        min: Math.round(totalArea.from),
        max: Math.round(totalArea.to),
      },
      ceilHeight: {
        min: +ceilHeight.from.toFixed(2),
        max: +ceilHeight.to.toFixed(2),
      },
      maintenanceCosts,
      propertyKind: getKind(propertyKind),
      furnitureKinds: getFurniture(furniture),
      condition: getCondition(condition),
      saleOfferKind: getSaleOfferKind(kind),
      renovate: getRenovate(renovate),
      startYear,
      startQuarter: getQuarter(startQuarter),
      commissioningYear,
      commissioningQuarter: getQuarter(commissioningQuarter),
    };

    return (
      <BodyClassName className="complexe">
        <div>
          <Title name={name} location={`${subLocalityName}, ${street}, ${house}`} />
          <Gallery images={images} />
          <Features offersCount={units} architect={architect} />
          <Characteristics characteristics={characteristics} />
          <Description title="Описание" text={fullDescription} />
          <Infrastructures infrastructures={amenities} />
          <Offers name={name} />
          <Guide />
        </div>
      </BodyClassName>
    );
  }
}

Index.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Index;
