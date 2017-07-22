import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import compassLogo from './img/compass-logo.svg';
import media from './media';

const LogoLink = styled(Link)`
`;

const LogoImage = styled.img`
  width: 179px;
  height: 24px;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;

  ${media.sm`
    width: 119px;
    height: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  `};
`;

const Navigation = styled(Link)`
  display: inline-block;
  font-family: 'Fira Sans', sans-serif;
  padding-left: 1.75rem;
  font-size: 16px;
  line-height: 1.0;
  color: #3e4247;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Navigations = styled.nav`
  display: block;
  padding-top: 1.4375rem;

  ${media.sm`
      display: none;
  `};
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = styled.header`
  background-color: white;
  border-bottom: solid 1px #eaebf0;
`;

const Wrapper = styled.div`
  ${media.sm`
    margin-left: 1rem;
    margin-right: 1rem;
  `};
`;

export default () =>
  (<Header>
    <Wrapper>
      <Grid>
        <HeaderContainer>
          <LogoLink to="/complexes/list">
            <LogoImage src={compassLogo} alt="compass logo" />
          </LogoLink>
          <Navigations>
            <Navigation to="/">Купить</Navigation>
            <Navigation to="/">Снять</Navigation>
            <Navigation to="/">Наши агенты</Navigation>
          </Navigations>
        </HeaderContainer>
      </Grid>
    </Wrapper>
  </Header>);
