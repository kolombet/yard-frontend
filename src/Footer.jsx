import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import RightArrow from './Components/RightArrow';

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

const FooterContainer = styled.footer`
  margin-top: 6rem;
  padding-top: 2rem;
  background-color: #111111;
  display: flex;
  align-items: center;
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
  margin-top: 0;
  width: 186px;
  margin-bottom: 1rem;
  border: solid 1px #3e4247;
  box-sizing: content-box;
`;

const Description = styled.p`
  margin-top: 6rem;
  margin-bottom: 2rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 11px;
  font-weight: 300;
  line-height: 1.125rem;
  color: #a9afb6;
`;

export default () =>
  (<FooterContainer>
    <Grid>
      <Row>
        <Col md={2}>
          <Title>ООО «Ярд»</Title>
          <Text>ОГРН 1175074002531</Text>
          <Text>ИНН 5036165365</Text>
          <TextLast>+7 (999) 821-14-88</TextLast>
        </Col>
        <Col md={2} mdOffset={2}>
          <Line />
          <Title>Жилые комплексы</Title>
          <NavLink to="/">ВТБ Арена Парк</NavLink>
          <NavLink to="/">Садовые кварталы</NavLink>
          <NavLink to="/">Резиденция Монэ</NavLink>
          <NavLinkLast to="/">
            Все ЖК Москвы<RightArrow />
          </NavLinkLast>
        </Col>
        <Col md={2}>
          <Line />
          <Title>Компания</Title>
          <NavLink to="/">Команда</NavLink>
          <NavLink to="/">О компании</NavLink>
        </Col>
      </Row>
      <Row>
        <Col md={8} mdOffset={4}>
          <Description>
            Любая информация, представленная на данном сайте, носит исключительно информационный
            характер и ни при каких условиях не является публичной офертой, определяемой положениями
            статьи 437 ГК РФ. © ООО «Ярд», 2017
          </Description>
        </Col>
      </Row>
    </Grid>
  </FooterContainer>);
