import React from 'react';
import PropTypes from 'prop-types';
import BodyClassName from 'react-body-classname';
import Gallery from './Gallery';
import Title from './Title';
import Features from './Features';
import Description from './Description';
import Infrastructure from './Infrastructure';
import Offers from './Offers';
import Guide from './Guide';
import Characteristics from './Characteristics';

class Index extends React.Component {
  constructor() {
    super();
    this.state = { complex: null };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`https://yard.moscow/api/v1/complexes/${id}`)
      .then(response => response.json())
      .then((json) => {
        this.setState({
          complex: json,
        });
      });
  }

  render() {
    let name = '';
    let location = '';
    let images = [];
    if (this.state.complex) {
      name = this.state.complex.name;
      location = this.state.complex.location.subLocalityName;
      images = this.state.complex.images;
    }
    return (
      <BodyClassName className="complexe">
        <div>
          <Title name={name} location={location} />
          <Gallery images={images} />
          <Features />
          <Characteristics />
          <Description />
          <Infrastructure />
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
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Index;
