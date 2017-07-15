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

export default props =>
  (<Col md={2}>
    <Label>
      {props.name}
    </Label>
  </Col>);
