// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import HorizontalLine from '../../Components/HorizontalLine';
import media from '../../media';

const Description = styled.section`margin-bottom: 1.5rem;`;

const Title = styled.div`
  margin: 0;
  padding-bottom: 1em;
  font-family: 'Philosopher', sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 27px;
  color: #3e4247;

  ${media.sm`
    padding-bottom: 0;
  `};
`;

const Text = styled.div`
  margin: 0;
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  line-height: 25px;
  color: #3e4247;
`;

const Wrapper = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;

  ${media.sm`
    padding-left: 0;
    padding-right: 0;
  `};
`;

type Props = {
  title: string,
  fullDescription: string,
};

export default (props: Props) =>
  (<Grid>
    <Wrapper>
      <Description>
        <Row>
          <Col xs={12} md={2}>
            <Title>
              {props.title}
            </Title>
          </Col>
          <Col xs={12} md={10}>
            <Text>
              {props.fullDescription}
            </Text>
          </Col>
        </Row>
      </Description>
      <HorizontalLine />
    </Wrapper>
  </Grid>);
