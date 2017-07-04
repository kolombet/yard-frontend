import React, { Component } from "react";
import BuildingInfoMainItem from "./BuildingInfoMainItem";
import HorizontalLine from "../../HorizontalLine";

class BuildingInfoTitle extends Component {
  render() {
    return (
      <section className="container">
        <div className="info-main">
          <BuildingInfoMainItem title="950" description="предложений" />
          <BuildingInfoMainItem
            title="John McAslan + Partners"
            description="архитектор"
          />
          <BuildingInfoMainItem title="Группа «ПСН»" description="застройщик" />
        </div>

        <HorizontalLine />
      </section>
    );
  }
}

export default BuildingInfoTitle;
