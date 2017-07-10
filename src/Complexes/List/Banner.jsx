import React from 'react';
import styled from 'styled-components';
import { Grid, Row } from 'react-flexbox-grid';
import compassDevelopmentLogo from '../../img/compass-development-logo.svg';

const Banner = styled.section`
  display: block;
  background-color: #161616;
`;

const Image = styled.img`
  width: 419px;
  height: 131px;
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

export default () =>
  (<Banner>
    <Grid>
      <Row center="md">
        <Image src={compassDevelopmentLogo} alt="compass development logo" />
      </Row>
    </Grid>
  </Banner>);
