// @flowtype

import React, { Component } from 'react';
import { Grid } from 'react-flexbox-grid';
import qs from 'qs';
import Card from './Card';
import { get } from '../../api';
import { ComplexType } from '../types';

type State = Array<ComplexType> | Array;

class Cards extends Component {
  constructor() {
    super();
    this.state = [];
  }
  state:State;

  componentDidMount() {
    const filter: string = qs.stringify({ filter: { state: 'public' } });
    get(`complexes?${filter}`).then((data) => {
      this.setState(data.items);
    });
  }

  render() {
    return (
      <Grid>
        {this.state.complexes.map((complex: ComplexType) => {
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
