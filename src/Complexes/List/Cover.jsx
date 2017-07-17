import React from 'react';
import styled from 'styled-components';
import { getImageUrl } from '../../util';

const Wrapper = styled.div`
  width: 491px;
  height: 350px;
`;

const Image = styled.img`
  width: 491px;
  height: 350px;
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
