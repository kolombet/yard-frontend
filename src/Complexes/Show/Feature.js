import React from "react";
export default props =>
  <div className="info-main-block">
    <h2 className="info-main-title">
      {props.title}
      <br />
      <small className="info-main-description">
        {props.description}
      </small>
    </h2>
  </div>;
