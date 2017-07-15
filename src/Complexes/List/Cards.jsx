import React, { Component } from 'react';
import { Grid } from 'react-flexbox-grid';
import Card from './Card';
import { getComplexes } from '../../api';

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
        {this.state.complexes.map((complex) => {
          const { location, name, id, image, slug, shortDescription = '' } = complex;
          const { subLocalityName, street, house } = location;

          return (
            <Card
              key={id}
              location={`${subLocalityName}, ${street}, ${house}`}
              name={name}
              description={shortDescription}
              image={image.id}
              slug={slug}
            />
          );
        })}
      </Grid>
    );
  }
}

export default Cards;
