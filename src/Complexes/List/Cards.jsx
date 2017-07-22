import React, { Component } from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import qs from 'qs';
import Card from './Card';
import { get } from '../../api';
import media from '../../media';

const Wrapper = styled.article`
  padding-left: 1rem;
  padding-right: 1rem;

  ${media.sm`
    padding-left: 0;
    padding-right: 0;
  `};
`;

class Cards extends Component {
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
      <Wrapper>
        <Grid>
          {this.state.complexes.map((complex) => {
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
      </Wrapper>
    );
  }
}

export default Cards;
