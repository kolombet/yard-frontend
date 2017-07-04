import React, {Component} from 'react';
import '../App.css';
import Gallery from './Gallery';
import BuildingInfoTitle from './BuildingInfoTitle';
import BuildingInfoMain from './BuildingInfoMain';
import BuildingInfoDescription from './BuildingInfoDescription';
import BuildingInfoInfrastructure from './BuildingInfostructure';
import Offers from './Offers';
import Guide from './Guide';
import BuildingInfoCharacteristics from "./BuildingInfoCharacteristics";

class Complex extends Component {
  render() {
    return (
      <div>
        <BuildingInfoTitle/>
        <Gallery/>
        <BuildingInfoMain/>
        <BuildingInfoCharacteristics/>
        <BuildingInfoDescription/>
        <BuildingInfoInfrastructure/>
        <Offers/>
        <Guide/>
      </div>
    );
  }
}

export default Complex;
