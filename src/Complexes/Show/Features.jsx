import React from "react";
import Feature from "./Feature";
import HorizontalLine from "../../Components/HorizontalLine";
import styled from "styled-components";
import { Grid } from "react-flexbox-grid";

const Features = styled.section`display: flex;`;

export default () =>
  <Grid>
    <Features>
      <Feature title="950" description="предложений" />
      <Feature title="John McAslan + Partners" description="архитектор" />
      <Feature title="Группа «ПСН»" description="застройщик" />
    </Features>

    <HorizontalLine />
  </Grid>;
