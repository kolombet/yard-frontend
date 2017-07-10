import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import compassLogo from './img/compass-logo.svg';

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
`;

const Logo = styled.img`
  width: 179px;
  height: 24px;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = styled.header`
  background-color: white;
  border-bottom: solid 1px #eaebf0;
`;

export default () =>
  (<Header>
    <Grid>
      <HeaderContainer>
        <Logo src={compassLogo} alt="compass logo" />
        <Navigations>
          <Navigation to="/">Купить</Navigation>
          <Navigation to="/">Снять</Navigation>
          <Navigation to="/">Наши агенты</Navigation>
        </Navigations>
      </HeaderContainer>
    </Grid>
  </Header>);
