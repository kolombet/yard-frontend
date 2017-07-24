// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import GuideNavigation from './GuideNavigation';
import media from '../../media';

const Guide = styled.section`
  padding-bottom: 3rem;
  margin-bottom: 0;
  background-color: #3e4247;
  color: white;

  ${media.sm`
    padding-bottom: 9.563rem;
    margin-bottom: 13.69rem;
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

const Info = styled.div`
  margin-top: 0;
  margin-bottom: 0;

  ${media.sm`
    margin-top: 11.25rem;
    margin-bottom: 11.25rem;
  `};
`;

const Summary = styled.h3`
  margin-top: 3rem;
  margin-bottom: 2rem;
  font-family: Philosopher, sans-serif;
  font-size: 20px;
  line-height: 22px;
  font-weight: 700;
  color: #a9afb6;

  ${media.sm`
    font-size: 24px;
    line-height: 27px;
  `};
`;

const Title = styled.h2`
  margin-top: 2rem;
  margin-bottom: 3rem;
  font-family: Philosopher, sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #ffffff;

  ${media.sm`
    font-size: 48px;
    line-height: 60px;
  `};
`;

const GuideLink = styled(Link)`
  margin-bottom: 11.31rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  line-height: 25px;
  color: #00779a;
`;

const AreaImage = styled.img`
  width: 100%;
  height: auto;
  margin-top: 0rem;
  margin-bottom: 0rem;

  ${media.sm`
    margin-top: 3.875rem;
    margin-bottom: 3.938rem;
    height: 560px;
  `};
`;

const Map = styled.img`
  position: absolute;
  width: 583px;
  height: 306px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
`;

const Navigation = styled.div`
  position: absolute;
  width: 36.5rem;
  background-color: #ffffff;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
`;

const publicURL: string = process.env.PUBLIC_URL || '';

export default () =>
  (<Guide>
    <Grid>
      <Wrapper>
        <Row>
          <Col xs={12} sm={6}>
            <Info>
              <Summary>Якиманка</Summary>
              <Title>Исторический центр Москвы в двух километрах от Кремля</Title>
              <GuideLink to="/">Гид по Якиманке →</GuideLink>
            </Info>
          </Col>
          <Col xs={12} sm={6} first="xs" last="sm">
            <AreaImage src={`${publicURL}/guide/1/area_image.jpg`} alt="area image" />
          </Col>
        </Row>
      </Wrapper>

      {/* <Row>
        <Col md={6}>
          <Map src={`${publicURL}/guide/1/map.png`} alt="map" />
        </Col>
        <Col md={6}>
          <Navigation>
            <GuideNavigation title="Красный Октябрь" distance="24 минуты, 6 км" />
            <GuideNavigation title="World class" distance="2 минуты, 300 м" />
            <GuideNavigation title="Третьяковская галерея" distance="14 минут, 4 км" />
          </Navigation>
        </Col>
      </Row> */}
    </Grid>
  </Guide>);
