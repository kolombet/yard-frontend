import React from "react";
import Gallery from "./Gallery";
import Title from "./Title";
import Features from "./Features";
import Description from "./Description";
import Infrastructure from "./Infrastructure";
import Offers from "./Offers";
import Guide from "./Guide";
import Characteristics from "./Characteristics";
import BodyClassName from "react-body-classname";

export default () =>
  <BodyClassName className="complexe">
    <div>
      <Title />
      <Gallery />
      <Features />
      <Characteristics />
      <Description />
      <Infrastructure />
      <Offers />
      <Guide />
    </div>
  </BodyClassName>;
