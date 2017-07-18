// @flow

import React from 'react';
import styled from 'styled-components';

const Feature = styled.div`
  padding-right: 3rem;
  padding-left: 0;
`;

const Title = styled.h2`
  margin-top: 1.375rem;
  margin-bottom: 1.5rem;
  font-family: Philosopher, sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  color: #3e4247;
`;

const Detail = styled.small`
  font-family: 'Fira Sans', sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;
  color: #a9afb6;
`;

type Props = {
  title: string,
  description: string,
};

export default (props: Props) =>
  (<Feature>
    <Title>
      {props.title}
      <br />
      <Detail>
        {props.description}
      </Detail>
    </Title>
  </Feature>);
