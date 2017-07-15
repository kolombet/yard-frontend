import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Grid, Row } from 'react-flexbox-grid';
import Offer from './Offer';

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

export default function OffersComponent(props) {
  return (
    <Offers>
      <Grid>
        <Row center="md">
          <Title>
            Предложения в ЖК «{props.name}»
          </Title>
        </Row>
        <Row>
          <Offer rooms={1} area={{ min: 59, max: 120 }} price={{ min: 20.3, max: 84.2 }} />
          <Offer rooms={1} area={{ min: 59, max: 120 }} price={{ min: 20.3, max: 84.2 }} />
          <Offer rooms={1} area={{ min: 59, max: 120 }} price={{ min: 20.3, max: 84.2 }} />
        </Row>
      </Grid>
    </Offers>
  );
}

OffersComponent.propTypes = {
  name: PropTypes.string,
};
