/* eslint-disable react/style-prop-object  */

import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import styled from 'styled-components';
import media from '../../media';
import { Position } from '../types';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoieGVucmVhbCIsImEiOiJjajVqdzF2cnAyZXlqMzJwa3BheTl4emVtIn0.Yfal-PngDVEmMcURuE2ulg',
  scrollZoom: false,
});

const Mapbox = styled(Map)`
  margin-top: 3rem;
  width: 100%;
  height: 166px;

  ${media.sm`
    margin-top: 0rem;
    position: absolute;
    width: 583px;
    height: 306px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
  `};
`;

export default ({ lat, long }: Position) =>
  (<Mapbox style="mapbox://styles/mapbox/streets-v9">
    <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
      <Feature coordinates={[lat, long]} />
    </Layer>
  </Mapbox>);
