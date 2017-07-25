// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import RightArrow from './Components/RightArrow';
import media from './media';

const NavLink = styled(Link)`
  display: block;
  margin-top: .5rem;
  margin-bottom: .5rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.4rem;
  color: #ffffff;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const NavLinkLast = styled(NavLink)`
  margin-top: 1rem;
  margin-bottom: 0;
`;

const Text = styled.p`
  margin-top: .5rem;
  margin-bottom: .5rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.4rem;
  color: #a9afb6;
`;

const TextLast = styled(Text)`
  margin-top: 1rem;
  margin-bottom: 0;
`;

const Footer = styled.footer`
  margin-top: 0;
  background-color: #111111;
  padding-top: 2rem;

  ${media.sm`
    margin-top: 6rem;
  `};
`;

const Title = styled.h4`
  margin-top: 0;
  margin-bottom: .5rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.4rem;
  color: #646971;
`;

const Line = styled.hr`
  margin-top: 3rem;
  width: 100%;
  margin-bottom: 1rem;
  border: solid 1px #3e4247;
  box-sizing: content-box;

  ${media.sm`
    margin-top: 0;
    width: 186px;      
  `};
`;

const Description = styled.p`
  margin-top: 6rem;
  margin-bottom: 3rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 11px;
  font-weight: 300;
  line-height: 1.125rem;
  color: #a9afb6;

  ${media.sm`
    margin-bottom: 2rem;
  `};
`;

const Wrapper = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;

  ${media.sm`
    margin-left: 0;
    margin-right: 0;
    display: flex;
    align-items: center;
  `};
`;

export default () =>
  (<Footer>
    <Wrapper>
      <Grid>
        <Row>
          <Col xs={12} md={2}>
            <Title>ООО «Ярд»</Title>
            <Text>ОГРН 1175074002531</Text>
            <Text>ИНН 5036165365</Text>
            <TextLast>+7 (999) 821-14-88</TextLast>
          </Col>
          <Col xs={12} md={2} mdOffset={2}>
            <Line />
            <Title>Жилые комплексы</Title>
            <NavLink to="/">ВТБ Арена Парк</NavLink>
            <NavLink to="/">Садовые кварталы</NavLink>
            <NavLink to="/">Резиденция Монэ</NavLink>
            <NavLinkLast to="/">
              Все ЖК Москвы<RightArrow />
            </NavLinkLast>
          </Col>
          <Col xs={12} md={2}>
            <Line />
            <Title>Компания</Title>
            <NavLink to="/">Команда</NavLink>
            <NavLink to="/">О компании</NavLink>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8} mdOffset={4}>
            <Description>
              Любая информация, представленная на данном сайте, носит исключительно информационный
              характер и ни при каких условиях не является публичной офертой, определяемой
              положениями статьи 437 ГК РФ. © ООО «Ярд», 2017
            </Description>
          </Col>
        </Row>
      </Grid>
    </Wrapper>
  </Footer>);
