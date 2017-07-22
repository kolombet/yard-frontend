// @flow

import React from 'react';
import styled from 'styled-components';
import { getImageUrl } from '../../util';
import media from '../../media';
import type { Image as ImageType } from '../types';

const Wrapper = styled.div`
  width: 100%;
  height: auto;

  ${media.sm`
    width: 491px;
    height: 350px;    
  `};
`;

const Image = styled.img`
  width: 100%;
  height: auto;

  ${media.sm`
    width: 491px;
    height: 350px;
  `};
`;

export default (props: ImageType) => {
  const image = getImageUrl(props.id, 512);
  const image2x = getImageUrl(props.id, 1024);
  const image3x = getImageUrl(props.id, 2048);

  return (
    <Wrapper>
      <Image src={image} srcSet={`${image2x} 2x, ${image3x} 3x,`} alt="complex" />
    </Wrapper>
  );
};
