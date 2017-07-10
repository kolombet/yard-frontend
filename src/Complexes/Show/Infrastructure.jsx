import React from 'react';
import PropTypes from 'prop-types';
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

export default function Component(props) {
  return (
    <Col md={2}>
      <Label>
        {props.name}
      </Label>
    </Col>
  );
}

Component.propTypes = {
  name: PropTypes.string.isRequired,
};

