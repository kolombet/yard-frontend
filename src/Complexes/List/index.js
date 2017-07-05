import React from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import Cards from "./Cards";
import BodyClassName from 'react-body-classname';
import styled from 'styled-components';

const Complexes = styled(BodyClassName)`
  font-size: 16px;
  font-family: 'Fira Sans', sans-serif;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased;
  -webkit-line-break: after-white-space;
  background: #ececec url("./img/background.png") repeat;
`;

export default () =>
  <Complexes>
    <div>
      <Banner />
      <Contact />
      <Cards />
    </div>
  </Complexes>