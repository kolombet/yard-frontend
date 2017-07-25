// @flow

import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-flexbox-grid';

const Label = styled.div`
  margin-top: 0;
  margin-bottom: .5rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  line-height: 22px;
  color: #3e4247;
`;

type Props = {
  name: string,
};

export default (props: Props) =>
  (<Col xs={6} md={2}>
    <Label>
      {props.name}
    </Label>
  </Col>);
