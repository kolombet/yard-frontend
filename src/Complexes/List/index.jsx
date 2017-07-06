import React from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import Cards from "./Cards";
import BodyClassName from "react-body-classname";

export default () =>
  <BodyClassName className="complexes">
    <div>
      <Banner />
      <Contact />
      <Cards />
    </div>
  </BodyClassName>;
