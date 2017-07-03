import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Gallery from './Gallery';
import BuildingInfoTitle from './BuildingInfoTitle';
import BuildingInfoMain from './BuildingInfoMain';
import BuildingInfoDescription from './BuildingInfoDescription';
import BuildingInfoInfrastructure from './BuildingInfostructure';
import Offers from './Offers';
import Guide from './Guide';
import BuildingInfoCharacteristics from "./BuildingInfoCharacteristics";
import LineShort from "./LineShort";

class Complex extends Component {
  render() {
    return (
      <div>
        <Header/>
        <BuildingInfoTitle/>
        <Gallery/>
        <BuildingInfoMain/>
        <BuildingInfoCharacteristics/>
        <BuildingInfoDescription/>
        <LineShort/>
        <BuildingInfoInfrastructure/>
        <Offers/>
        <Guide/>
        <Footer/>
      </div>
    );
  }
}

export default Complex;
