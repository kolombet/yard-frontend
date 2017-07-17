import React from 'react';
import styled from 'styled-components';

const Navigation = styled.div`
  padding: 1.5rem;
  border-bottom: solid 2px #e0e0e1;
`;

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: .5rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  font-weight: bold;
  line-height: 22px;
  color: #3e4247;
`;

const DistanceInfo = styled.p`
  margin-top: .5rem;
  margin-bottom: 0;
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  line-height: 22px;
  color: #a9afb6;
`;

export default props =>
  (<Navigation>
    <Title>
      {props.title}
    </Title>
    <DistanceInfo>
      {props.distance}
    </DistanceInfo>
  </Navigation>);
