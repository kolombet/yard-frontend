import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import Feature from './Feature';
import HorizontalLine from '../../Components/HorizontalLine';

const Features = styled.section`display: flex;`;

export default (props) => {
  const offersCount = props.offersCount || 0;
  const architect = props.architect || '';
  const developer = props.developer || '';

  return (
    <Grid>
      <Features>
        {offersCount > 0 && <Feature title={offersCount} description="предложений" />}
        {architect.length > 0 && <Feature title={architect} description="архитектор" />}
        {developer.length > 0 && <Feature title={developer} description="застройщик" />}
      </Features>

      <HorizontalLine />
    </Grid>
  );
};
