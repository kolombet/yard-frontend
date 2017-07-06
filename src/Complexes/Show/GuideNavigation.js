import React from "react";

export default props =>
  <div className="guide-navigation-block">
    <h3 className="guide-navigation-title">
      {props.title}
    </h3>
    <p className="guide-navigation-distance-info">
      {props.distance}
    </p>
  </div>;
