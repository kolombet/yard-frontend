import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import media from '../../media';

const Name = styled.h1`
  margin-top: 1.563rem;
  margin-bottom: .5rem;
  font-family: 'Philosopher', sans-serif;
  font-size: 32px;
  font-weight: 700;
  font-weight: bold;
  line-height: 36px;
  color: #3e4247;

  ${media.sm`
    margin-top: 1rem;
  `};
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
  display: none;
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

  ${media.sm`
    display: block;
  `};
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: initial;
  align-items: flex-start;
  padding-left: 1rem;
  padding-right: 1rem;

  ${media.sm`
    padding-left: 0;
    padding-right: 0;
    justify-content: space-between;
  `};
`;

const Title = styled.div``;

export default props =>
  (<Grid>
    <Wrapper>
      <Title>
        <Name>
          ЖК «{props.name}»
        </Name>
        <Location>
          {props.location}
        </Location>
      </Title>
      <Favorite>В избранное</Favorite>
    </Wrapper>
  </Grid>);
