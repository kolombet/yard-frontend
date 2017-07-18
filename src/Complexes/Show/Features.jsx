// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import Feature from './Feature';
import HorizontalLine from '../../Components/HorizontalLine';

const Features = styled.section`display: flex;`;

type Props = {
  offersCount: number,
  architect: string,
  developer: string,
};

export default (props: Props) => {
  const { offersCount = 0, architect = '', developer = '' } = props;

  return (
    <Grid>
      <Features>
        {offersCount > 0 && <Feature title={offersCount.toString()} description="предложений" />}
        {architect.length > 0 && <Feature title={architect} description="архитектор" />}
        {developer.length > 0 && <Feature title={developer} description="застройщик" />}
      </Features>

      <HorizontalLine />
    </Grid>
  );
};
