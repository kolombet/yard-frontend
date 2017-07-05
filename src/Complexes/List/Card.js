import React from "react";
import buildingPreview from "../../img/bitmap.jpg";
import { Link } from "react-router-dom";

export default props =>
  <Link to="/complex" className="card-link">
    <img
      src={buildingPreview}
      className="bitmap complex-card-img"
      alt="building preview"
    />
    <article className="card-info">
      <p className="card-location">
        {props.title}
      </p>
      <h3 className="card-address">
        {props.address}
      </h3>
      <p className="card-description">
        {props.description}
      </p>
    </article>
  </Link>;
