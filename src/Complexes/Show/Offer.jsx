import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';

const Offer = styled.div`
  padding: 1.5rem 2rem;
  margin-bottom: 4rem;
  background-color: #ffffff;
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

export default function Component(props) {
  return (
    <Col md={4}>
      <Offer>
        <Title>
          {props.rooms}-комнатные квартиры
        </Title>
        <Area>Площадь</Area>
        <AreaValue>
          от {props.area.min} до {props.area.max} м²
        </AreaValue>
        <Price>Стоимость</Price>
        <PriceValue>
          от {props.price.min} до {props.price.max} млн руб
        </PriceValue>
        <Row center="md">
          <OpenOffer>Посмотреть предложения</OpenOffer>
        </Row>
      </Offer>
    </Col>
  );
}

Component.propTypes = {
  rooms: PropTypes.number.isRequired,
  area: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  }).isRequired,
  price: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  }).isRequired,
};
