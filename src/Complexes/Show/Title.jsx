import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Name = styled.h1`
  margin-top: 1.563rem;
  margin-bottom: .5rem;
  font-family: 'Philosopher', sans-serif;
  font-size: 32px;
  font-weight: 700;
  font-weight: bold;
  line-height: 36px;
  color: #3e4247;
`;

const Location = styled.p`
  margin-top: .5rem;
  margin-bottom: 1rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;
  color: #a9afb6;
`;

const Favorite = styled.button`
  padding: 7px 15px;
  margin-top: 24px;
  align-self: flex-start;
  border-radius: 2px;
  border: solid 1px #e0e0e1;
  background-color: transparent;

  font-family: 'Fira Sans', sans-serif;
  font-size: 10px;
  font-weight: 300;
  line-height: 10px;
  color: #00779a;
`;

export default function TitleComponent(props) {
  return (
    <Grid>
      <Row between="md">
        <Col>
          <Name>
            ЖК «{props.name}»
          </Name>
          <Location>
            {props.location}
          </Location>
        </Col>
        <Favorite>В избранное</Favorite>
      </Row>
    </Grid>
  );
}

TitleComponent.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
