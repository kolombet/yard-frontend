import React from 'react';
import styled from 'styled-components';
import { getImageUrl } from '../../util';
import media from '../../media';

const Wrapper = styled.div`
  width: 491px;
  height: 350px;

  ${media.sm`
    width: 100%;
    height: auto;
  `};
`;

const Image = styled.img`
  width: 491px;
  height: 350px;

  ${media.sm`
    width: 100%;
    height: auto;
  `};
`;

export default (props) => {
  const image = getImageUrl(props.id, 512);
  const image2x = getImageUrl(props.id, 1024);
  const image3x = getImageUrl(props.id, 2048);

  return (
    <Wrapper>
      <Image src={image} srcSet={`${image2x} 2x, ${image3x} 3x,`} alt={props.name} />
    </Wrapper>
  );
};
