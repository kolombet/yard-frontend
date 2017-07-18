// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid, Row } from 'react-flexbox-grid';
import Offer from './Offer';
import { OfferType } from '../types.js';

const Offers = styled.section`background-color: #f4f5f9;`;

const Title = styled.h2`
  margin-top: 4rem;
  margin-bottom: 1.5rem;
  font-family: Philosopher, sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 27px;
  color: #3e4247;
`;

type Props = {
  name: string,
  offers: Array<OfferType>,
};

export default (props: Props) =>
  <Offers>
    <Grid>
      <Row center="md">
        <Title>
          Предложения в ЖК «{props.name}»
        </Title>
      </Row>
      <Row>
        {props.offers.map((offer: OfferType) => {
          return <Offer rooms={offer.rooms} area={offer.area} price={offer.price} />;
        })}
      </Row>
    </Grid>
  </Offers>;
