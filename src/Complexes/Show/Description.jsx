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
  margin-top: 0;
  margin-bottom: 0;
  border-top: none;
  border-bottom: solid 1px #e0e0e1;
  display: block;
`;

const TextWrapper = styled.div`position: relative;`;

const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 128px;
  bottom: 0px;
  background: linear-gradient(0deg, #fff, rgba(255, 255, 255, 0.3));
`;

const ReadButton = styled.button`
  left: 50%;
  transform: translate(-50%, 0);
  position: absolute;
  bottom: 3px;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 2px;
  background-color: #00779a;
  cursor: pointer;
  margin: 0, auto;

  font-family: "Fira Sans", sans-serif;
  font-size: 10px;
  line-height: 10px;
  font-weight: 300;
  color: white;
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
            <TextWrapper>
              <Text>
                {props.fullDescription}
              </Text>
              <Gradient />
              <ReadButton>Прочитать описание</ReadButton>
            </TextWrapper>
          </Col>
        </Row>
      </Description>
      <Line />
    </Wrapper>
  </Grid>);
