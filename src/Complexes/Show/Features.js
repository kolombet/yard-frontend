import React from "react";
import Feature from "./Feature";
import HorizontalLine from "../../HorizontalLine";

export default () =>
  <section className="container">
    <div className="info-main">
      <Feature title="950" description="предложений" />
      <Feature title="John McAslan + Partners" description="архитектор" />
      <Feature title="Группа «ПСН»" description="застройщик" />
    </div>

    <HorizontalLine />
  </section>;
