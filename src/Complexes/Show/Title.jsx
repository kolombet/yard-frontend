// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import media from '../../media';

const Name = styled.h1`
  margin-top: 1.563rem;
  margin-bottom: .5rem;
  font-family: 'Philosopher', sans-serif;
  font-size: 26px;
  font-weight: 700;
  font-weight: bold;
  line-height: 36px;
  color: #3e4247;

  ${media.sm`
    margin-top: 1rem;
    font-size: 32px;
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

  ${media.sm`
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
    display: block;
  `};
`;

const Wrapper = styled.div`
  display: block;

  margin-left: 1rem;
  margin-right: 1rem;

  ${media.sm`
    margin-left: 0;
    margin-right: 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  `};
`;

const Title = styled.div``;

type Props = {
  name: string,
  location: string,
};

export default (props: Props) =>
  (<Grid>
    <Wrapper>
      <Header name={props.name} location={props.location} />
      <Favorite>В избранное</Favorite>
    </Wrapper>
  </Grid>);

const Header = (props: Props) =>
  (<Title>
    <Name>
      ЖК «{props.name}»
    </Name>
    <Location>
      {props.location}
    </Location>
  </Title>);
