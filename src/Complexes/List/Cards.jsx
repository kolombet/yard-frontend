import React, { Component } from 'react';
import { Grid } from 'react-flexbox-grid';
import Card from './Card';
import { getExternalImageUrl, getComplexes, isDraft } from '../../util';

class Cards extends Component {
  constructor() {
    super();
    this.state = { complexes: [] };
  }

  componentDidMount() {
    getComplexes().then((json) => {
      this.setState({
        complexes: json.items,
      });
    });
  }

  render() {
    return (
      <Grid>
        {this.state.complexes.filter(complex => !isDraft(complex.state)).map((complex) => {
          const { location, name, id, image, slug } = complex;
          const { subLocalityName, street, house } = location;

          return (
            <Card
              key={id}
              location={`${subLocalityName}, ${street}, ${house}`}
              name={name}
              description="Ipsum lorem"
              image={getExternalImageUrl(image)}
              slug={slug}
            />
          );
        })}
      </Grid>
    );
  }
}

export default Cards;
