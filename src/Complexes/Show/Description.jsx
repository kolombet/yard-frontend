// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import media from '../../media';

const Description = styled.section`margin-bottom: 1.5rem;`;

const Title = styled.div`
  margin: 0;
  padding-bottom: 1em;
  font-family: 'Philosopher', sans-serif;
  font-size: 20px;
  line-height: 28px;
  font-weight: 700;
  color: #3e4247;

  ${media.sm`
    font-size: 24px;
    line-height: 27px;
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

const Line = styled.hr`
  display: none;

  ${media.sm`
    margin-top: 0;
    margin-bottom: 0;
    border-top: none;
    border-bottom: solid 1px #e0e0e1;
    display:block;
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
      <Line />
    </Wrapper>
  </Grid>);
