import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import Feature from './Feature';
import HorizontalLine from '../../Components/HorizontalLine';

const Features = styled.section`display: flex;`;

export default function FeaturesComponent(props) {
  return (
    <Grid>
      <Features>
        <Feature title={props.offersCount.toString()} description="предложений" />
        <Feature title={props.architect} description="архитектор" />
        <Feature title={props.developer} description="застройщик" />
      </Features>

      <HorizontalLine />
    </Grid>
  );
}

FeaturesComponent.propTypes = {
  offersCount: PropTypes.number.isRequired,
  architect: PropTypes.string.isRequired,
  developer: PropTypes.string.isRequired,
};
