import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import pluralize from 'pluralize-ru';
import { getImageUrl } from '../../util';
import media from '../../media';

const Gallery = styled.section``;

const Wrapper = styled.div`position: relative;`;

const Images = styled.div`
  overflow-x: auto;
  display: flex;
  height: 400px;
`;

const Image = styled.img`height: 400px;`;

const Expand = styled.button`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 2px;
  background-color: #00779a;

  font-family: 'Fira Sans', sans-serif;
  font-size: 10px;
  font-weight: 300;
  line-height: 10px;
  color: white;

  ${media.sm`
    left: 0rem;
  `};
`;

export default (props) => {
  const length = props.images.length;
  const count = pluralize(length, 'фотографий', 'фотография', 'фотографии', 'фотографий');
  return (
    <Gallery>
      <Images>
        {props.images.map(image =>
          <Image key={image.id} src={getImageUrl(image.id, 1024)} alt="gallery" />,
        )}
      </Images>
      <Grid>
        <Wrapper>
          <Expand>
            {length} {count}
          </Expand>
        </Wrapper>
      </Grid>
    </Gallery>
  );
};
