import React from "react";
import compassLogo from "./img/compass-logo.svg";
import { Link } from "react-router-dom";
import { Grid } from "react-flexbox-grid";
import styled from "styled-components";

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
  <Header>
    <Grid>
      <HeaderContainer>
        <Logo src={compassLogo} alt="compass logo" />
        <Navigations>
          <Navigation to="/" className="header-link">
            Купить
          </Navigation>
          <Navigation to="/" className="header-link">
            Снять
          </Navigation>
          <Navigation to="/" className="header-link">
            Наши агенты
          </Navigation>
        </Navigations>
      </HeaderContainer>
    </Grid>
  </Header>;
