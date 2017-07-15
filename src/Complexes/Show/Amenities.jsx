import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Amenitie from './Amenitie';

const Wrapper = styled.section`margin-bottom: 3rem;`;

const Title = styled.h2`
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-family: Philosopher, sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 27px;
  color: #3e4247;
`;

export default props =>
  (<Grid>
    <Wrapper>
      <Row>
        <Col md={2}>
          {props.amenities.length > 0 && <Title>Инфраструктура</Title>}
        </Col>
      </Row>
      <Row>
        {props.amenities.map(amenitie => <Amenitie key={amenitie.id} name={amenitie.name} />)}
      </Row>
    </Wrapper>
  </Grid>);
