import React from 'react';
import PropTypes from 'prop-types';
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
  font-family: FiraSans, sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;
  color: #a9afb6;
`;

export default function Component(props) {
  return (
    <Feature>
      <Title>
        {props.title}
        <br />
        <Detail>
          {props.description}
        </Detail>
      </Title>
    </Feature>
  );
}

Component.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
