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
        {props.offersCount &&
          props.offersCount > 0 &&
          <Feature title={props.offersCount} description="предложений" />}
        {props.architect &&
          props.architect.length > 0 &&
          <Feature title={props.architect} description="архитектор" />}
        {props.developer &&
          props.developer.length > 0 &&
          <Feature title={props.developer} description="застройщик" />}
      </Features>

      <HorizontalLine />
    </Grid>
  );
}

FeaturesComponent.propTypes = {
  offersCount: PropTypes.number,
  architect: PropTypes.string,
  developer: PropTypes.string,
};

FeaturesComponent.defaultProps = {
  offersCount: 0,
  architect: '',
  developer: '',
};
