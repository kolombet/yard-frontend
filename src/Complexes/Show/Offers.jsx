// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid, Row } from 'react-flexbox-grid';
import Offer from './Offer';
import type { Offer as OfferType } from '../types';
import media from '../../media';

const Offers = styled.section`
  background-color: #f4f5f9;
  padding-top: 2rem;

  ${media.sm`
    padding-top: 4rem;
  `};
`;

const Title = styled.h2`
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-family: Philosopher, sans-serif;
  font-size: 20px;
  line-height: 28px;
  font-weight: 700;
  color: #3e4247;
  text-align: center;

  ${media.sm`
    padding-left: 0;
    padding-right: 0;
    margin-top: 0;
    margin-bottom: 1.5rem;
    font-size: 24px;
    line-height: 27px;
  `};
`;

const Wrapper = styled.div`
  overflow-x: scroll;
  ${media.sm`
    overflow-x: inherit;
  `};
`;

const WrapperInner = styled.div`
  width: 76rem;
  margin-left: 1rem;
  margin-right: 1rem;
  ${media.sm`
    margin-left: 0rem;
    margin-right: 0rem;
  `};
`;

type Props = {
  name: string,
  offers: Array<OfferType>,
};

export default (props: Props) =>
  (<Offers>
    <Grid>
      <Title>
        Предложения в ЖК «{props.name}»
      </Title>
      <Wrapper>
        <WrapperInner>
          <Row>
            {props.offers.map((offer: OfferType) => <Offer key={offer.id} offer={offer} />)}
          </Row>
        </WrapperInner>
      </Wrapper>
    </Grid>
  </Offers>);
