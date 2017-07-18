import React, { Component } from 'react';
import { Grid } from 'react-flexbox-grid';
import qs from 'qs';
import Card from './Card';
import { get } from '../../api';

type Complex = {
  id: number
  name: string,
  location: {
    subLocalityName: string,
    street: string
  },
  image: {
    height: number,
    isPublic: boolean,
    id: string,
    width: number
  }
  state: string,
  slug: string,
  shortDescription: string
};

class Cards extends Component {
  state: {
    items: Array<Complex>
  }

  constructor() {
    super();
    this.state = { complexes: [] };
  }

  componentDidMount() {
    const filter = qs.stringify({ filter: { state: 'public' } });
    get(`complexes?${filter}`).then((json) => {
      this.setState({
        complexes: json.items,
      });
    });
  }

  render() {
    return (
      <Grid>
        {this.state.complexes.map((complex:Complex) => {
          const { location, name, id, image, slug, shortDescription = '' } = complex;
          const { subLocalityName, street } = location;

          return (
            <Card
              key={id}
              location={`${subLocalityName}, ${street}`}
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
