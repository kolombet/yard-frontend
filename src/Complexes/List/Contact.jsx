import React from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import styled from 'styled-components';

const Contact = styled.div`
  width: 804px;
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: .5rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.55;
  color: #3e4247;
`;

const Description = styled.p`
  margin-top: .5rem;
  margin-bottom: 1rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  color: #3e4247;
`;

const ContactButton = styled.button`
  margin: 0;
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

export default () =>
  (<Grid>
    <Row center="md">
      <Contact>
        <Title>Discover Our New Developments</Title>
        <Description>
          Compass brings a modern approach to new development marketing and sales. From boutique
          rental conversions to luxurious ground-up condominiums, browse our portfolio of current
          offerings.
        </Description>
        <ContactButton>Contact The Team</ContactButton>
      </Contact>
    </Row>
  </Grid>);
