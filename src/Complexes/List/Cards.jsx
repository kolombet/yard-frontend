import React, { Component } from 'react';
import { Grid } from 'react-flexbox-grid';
import Card from './Card';
import { getExternalImageUrl, getComplexes } from '../../util';

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
    if (!this.state.complexes) return null;

    return (
      <Grid>
        {this.state.complexes.map((complex) => {
          const { location, name, id, image } = complex;
          const { subLocalityName, street, house } = location;
          return (
            <Card
              key={id}
              id={id}
              location={`${subLocalityName}, ${street}, ${house}`}
              name={name}
              description="Ipsum lorem"
              image={getExternalImageUrl(image)}
            />
          );
        })}
      </Grid>
    );
  }
}

export default Cards;
