// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid, Row } from 'react-flexbox-grid';
import Amenity from './Amenity';
import type { Amenity as AmenityType } from '../types';
import media from '../../media';

const Wrapper = styled.section`
  margin-bottom: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;

  ${media.sm`
    padding-left: 0;
    padding-right: 0;
  `};
`;

const Title = styled.h2`
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-family: Philosopher, sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 27px;
  color: #3e4247;
`;

type Props = { amenities: Array<AmenityType> };

export default (props: Props) =>
  (<Grid>
    <Wrapper>
      <Title>Инфраструктура</Title>
      <Row>
        {props.amenities.map(amenity => <Amenity key={amenity.id} name={amenity.name} />)}
      </Row>
    </Wrapper>
  </Grid>);
