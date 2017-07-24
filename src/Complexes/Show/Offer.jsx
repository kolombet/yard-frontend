// @flow

import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import type { Offer as OfferType } from '../types';
import media from '../../media';

const Offer = styled.div`
  width: 236px;
  padding: 1.5rem 2rem;
  margin-bottom: 4rem;
  background-color: #ffffff;

  ${media.sm`
    width: 326px;
  `};
`;

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-family: Philosopher, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 22px;
  color: #3e4247;
`;

const Area = styled.p`
  margin-bottom: 0.625rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  line-height: 22px;
  color: #a9afb6;
`;

const AreaValue = styled.p`
  margin-top: 0.625rem;
  margin-bottom: 1.563rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  line-height: 22px;
  color: #3e4247;
`;

const Price = styled.p`
  margin-bottom: 0.625rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  line-height: 22px;
  color: #a9afb6;
`;

const PriceValue = styled.p`
  margin-top: 0.625rem;
  margin-bottom: 2.063rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  line-height: 22px;
  color: #3e4247;
`;

const OpenOffer = styled.button`
  padding: .75rem 2rem;
  background-color: #000000;
  border: none;
  border-radius: 2px;
  cursor: pointer;

  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  line-height: 1.0;
  color: #ffffff;
  text-align: center;
`;

type Props = {
  offer: OfferType,
};

export default ({ offer }: Props = {}) => {
  const { rooms, area, price } = offer;
  return (
    <Col xs={4}>
      <Offer>
        <Title>
          {rooms}-комнатные квартиры
        </Title>
        <Area>Площадь</Area>
        <AreaValue>
          от {area.min} до {area.max} м²
        </AreaValue>
        <Price>Стоимость</Price>
        <PriceValue>
          от {price.min} до {price.max} млн руб
        </PriceValue>
        <Row center="xs">
          <OpenOffer>Посмотреть предложения</OpenOffer>
        </Row>
      </Offer>
    </Col>
  );
};
