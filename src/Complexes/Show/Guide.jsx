// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import GuideNavigation from './GuideNavigation';

const Guide = styled.section`
  padding-bottom: 9.563rem;
  margin-bottom: 13.69rem;
  background-color: #3e4247;
  color: white;
`;

const Info = styled.div`
  margin-top: 11.25rem;
  margin-bottom: 11.25rem;
`;

const Summary = styled.h3`
  margin-bottom: 3rem;
  font-family: Philosopher, sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 27px;
  color: #a9afb6;
`;

const Title = styled.h2`
  margin-top: 3rem;
  margin-bottom: 3rem;
  font-family: Philosopher, sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 60px;
  color: #ffffff;
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
  height: 560px;
  margin-top: 3.875rem;
  margin-bottom: 3.938rem;
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
      <Row>
        <Col xs={12} md={6}>
          <Info>
            <Summary>Якиманка</Summary>
            <Title>Исторический центр Москвы в двух километрах от Кремля</Title>
            <GuideLink to="/">Гид по Якиманке →</GuideLink>
          </Info>
        </Col>
        <Col xs={12} md={6}>
          <AreaImage src={`${publicURL}/guide/1/area_image.jpg`} alt="area image" />
        </Col>
      </Row>
      <Row>
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
      </Row>
    </Grid>
  </Guide>);
