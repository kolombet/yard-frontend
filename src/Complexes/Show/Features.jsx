// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import Feature from './Feature';
import HorizontalLine from '../../Components/HorizontalLine';
import media from '../../media';

const Features = styled.section`
  display: block;
  ${media.sm`
    display: flex;
  `};
`;

const Wrapper = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;

  ${media.sm`
    margin-left: 0;
    margin-right: 0;      
  `};
`;

type Props = {
  offersCount: number,
  architect: string,
  developer: string,
};

export default (props: Props) => {
  const { offersCount = 0, architect = '', developer = '' } = props;

  return (
    <Grid>
      <Wrapper>
        <Features>
          {offersCount > 0 && <Feature title={offersCount.toString()} description="предложений" />}
          {architect.length > 0 && <Feature title={architect} description="архитектор" />}
          {developer.length > 0 && <Feature title={developer} description="застройщик" />}
        </Features>

        <HorizontalLine />
      </Wrapper>
    </Grid>
  );
};
