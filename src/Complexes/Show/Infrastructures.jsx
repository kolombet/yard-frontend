import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Infrastructure from './Infrastructure';

const Infrastructures = styled.section`margin-bottom: 3.5rem;`;

const Title = styled.h2`
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-family: Philosopher, sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 27px;
  color: #3e4247;
`;

export default function InfrastructuresComponent(props) {
  return (
    <Grid>
      <Infrastructures>
        <Row>
          <Col md={2}>
            <Title>Инфраструктура</Title>
          </Col>
        </Row>
        <Row>
          {props.amenities.map(amenitie =>
            <Infrastructure key={amenitie.id} name={amenitie.name} />,
          )}
        </Row>
      </Infrastructures>
    </Grid>
  );
}

InfrastructuresComponent.propTypes = {
  amenities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
