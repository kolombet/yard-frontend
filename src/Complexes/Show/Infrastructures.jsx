import React from 'react';
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

export default () =>
  (<Grid>
    <Infrastructures>
      <Row>
        <Col md={2}>
          <Title>Инфраструктура</Title>
        </Col>
      </Row>
      <Row>
        <Infrastructure name="Бассейн" />
        <Infrastructure name="Детский сад" />
        <Infrastructure name="Частная школа" />
        <Infrastructure name="Бассейн" />
        <Infrastructure name="Детский сад" />
        <Infrastructure name="Частная школа" />
      </Row>
      <Row>
        <Infrastructure name="Бассейн" />
        <Infrastructure name="Бассейн" />
        <Infrastructure name="Бассейн" />
        <Infrastructure name="Бассейн" />
      </Row>
    </Infrastructures>
  </Grid>);
